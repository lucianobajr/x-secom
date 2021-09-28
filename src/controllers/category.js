const repository = require("../repositories/category");

const fields = "name _id label";

exports.post = async (req, res) => {
  try {
    await repository.create(req.body);
    res.status(201).send({ message: "Registered category" });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Category not registred", data: error.message });
  }
};

exports.get = async (req, res) => {
  try {
    const categories = await repository.getAll(fields);
    res.status(200).send(categories);
  } catch (error) {
    res.status(400).send({ message: "Erro na busca", data: error.message });
  }
};

exports.put = async (req, res) => {
  try {
    const category = await repository.update(req.params.id, req.body, fields);
    res.status(200).send(category);
  } catch (error) {
    res
      .status(400)
      .send({ message: "Categoria não atualizada", data: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await repository.delete(req.params.id);
    res.status(200).send({ message: "Categoria excluída com sucesso" });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Falha ao remover a categoria", data: error.message });
  }
};
