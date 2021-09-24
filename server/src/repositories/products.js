const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.get = (
  condition,
  fields,
  limit = 10,
  page = 0,
  sort = "name",
  direction = "asc"
) => {
  // busco apenas os produtos que estão ativos no sistema.
  // Coloco as restrições de busca dentro do {}.
  // O segundo parâmetro do find são os campos que quero trazer
  return Product.find(condition, fields, { skip: limit * page, limit })
    .populate("category", "_id name label")
    .sort({ [sort]: direction === "desc" ? -1 : 1 })
    .exec();
};

exports.getById = (id, fields) => {
  return Product.findById(id, fields).populate("category", "_id name label");
};

exports.create = async (data) => {
  // save é uma função assíncrona então ela retorna uma promessa...
  // Nesse caso a gente pode fazer uso o save().then(x => {}).catch(e => {})

  const product = new Product(data);
  //let product = new Product();
  //product.title = data.title...
  
  await product.save();
};

exports.update = async (id, data, fields) => {
  // podemos fazer uso do find e depois do save
  await Product.findByIdAndUpdate(id, {
    $set: {
      ...data,
    },
  });
  return Product.findById(id, fields).populate("category", "_id name label");
};

exports.delete = (id) => {
  return Product.findByIdAndDelete(id);
  //posso passar o id por parâmetro ou pelo corpo.
  // Então uso req.params ou req.body.
  // Aí eu teria que tirar o id da rota do delete no arquivo routes.js
};
