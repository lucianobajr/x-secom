const repository = require('../repositories/products');

const fields =
  'name _id description price category count_serves is_available is_on_sale image sale_price';

const validateBody = (body) => {
  if (!body.description || body.description.length > 200) {
    throw new Error('A descrição do produto deve ter no máximo 200 caracteres');
  }

  if (!body.price || body.price <= 0) {
    throw new Error('O valor do produto deve ser maior que zero');
  }
};

exports.post = async (req, res) => {
  try {
    await repository.create(req.body);
    res.status(201).send({ message: 'Produto cadastrado' });
  } catch (e) {
    res
      .status(400)
      .send({ message: 'Produto não cadastrado', data: e.message });
  }
};

exports.get = async (req, res) => {
  try {
    const condition = {};
    if (req.query.search) {
      condition.$or = [
        { name: { $regex: new RegExp(req.query.search, 'i') } },
        { description: { $regex: new RegExp(req.query.search, 'i') } },
      ];
    }
    if (req.params.category) {
      condition.category = req.params.category;
    }

    const products = await repository.get(
      condition,
      fields,
      parseInt(req.query.limit, 10) || 10,
      parseInt(req.query.page, 10) || 0,
      req.query.sort,
      req.query.direction,
    );
    res.status(200).send(products);
  } catch (e) {
    res.status(400).send({ message: 'Falha na busca', data: e.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const product = await repository.getById(req.params.id, fields);
    if (!product) {
      return res.status(404).send({ message: 'Produto não encontrado' }); //537eed02ed345b2e039652d2
    }
    return res.status(200).send(product);
  } catch (e) {
    return res.status(400).send({ message: 'Erro na busca', data: e.message });
  }
};

exports.put = async (req, res) => {
  try {
    const product = await repository.update(req.params.id, req.body, fields);
    res.status(200).send(product);
  } catch (e) {
    res
      .status(400)
      .send({ message: 'Produto não atualizado', data: e.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await repository.delete(req.params.id);
    res.status(200).send({ message: 'Produto excluído com sucesso' });
  } catch (e) {
    res
      .status(400)
      .send({ message: 'Falha ao remover o produto', data: e.message });
  }
};