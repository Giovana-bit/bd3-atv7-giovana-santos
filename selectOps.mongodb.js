const database = "BD3-NoSQL-Produtos";
const collection = "bd3-nosql-atv7";

use(database);

/* Exibir maior que 700 */
db['bd3-nosql-atv7'].find({preco: {$gt: 700}}).sort({preco: 1})

/* Exibir menor que 450 */
db['bd3-nosql-atv7'].find({preco: {$lt: 450}}).sort({preco: 1})

/* Exibir valores entre 500 e 950 */
db['bd3-nosql-atv7'].find({preco: {$gte: 500, $lte: 950}}).sort({preco: 1})