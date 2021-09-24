const mongoose = require("mongoose");
const Category = mongoose.model("Category");

exports.getAll = (fields) => {
  return Category.find({}, fields);
};

exports.create = async (data) => {
  const category = new Category();
  category.name = data.name;
  category.label = data.label.toLowerCase();

  await category.save();
};

exports.update = async (id, data, fields) => {
  await Category.findByIdAndUpdate(id, {
    $set: {
      ...data,
      label: data.label.toLowerCase(),
    },
  });
  return Category.findById(id, fields);
};

exports.delete = (id) => {
  return Category.findByIdAndDelete(id);
};