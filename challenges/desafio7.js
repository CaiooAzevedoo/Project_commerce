db.produtos.find({ $and: [{ vendidos: { $ne: 50 } },
  { tags: { $exists: false } }] },
  { nome: 1, _id: false, vendidos: 1 });