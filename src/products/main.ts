import { createProduct, calcStock, products } from './product.service'

createProduct({
  name: 'Prod 1',
  createdAt: new Date(2001, 1, 1),
  stock: 14
});

createProduct({
  name: 'Prod 2',
  createdAt: new Date(2001, 1, 1),
  stock: 14,
  size: 'M'
});

createProduct({
  name: 'Prod 3',
  createdAt: new Date(1990, 1, 1),
  stock: 234,
  size: 'S'
});

console.log(products);
const total = calcStock();
console.log(total);
