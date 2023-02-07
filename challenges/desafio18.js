db.produtos.updateMany({ nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
{ $push: { ingredientes: "bacon" } });
db.produtos.find({}, { name: 1, ingredientes: 1, _id: 0 });