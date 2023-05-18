(() => {
  type Sizes =  'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Prod 1',
    createdAt: new Date(2001, 1, 1),
    stock: 14
  });

  addProduct({
    title: 'Prod 2',
    createdAt: new Date(2001, 1, 1),
    stock: 14,
    size: 'M'
  });
  console.log(products);
  addProduct({
    title: 'Prod 3',
    createdAt: new Date(1990, 1, 1),
    stock: 234,
    size: 'S'
  })
})()
