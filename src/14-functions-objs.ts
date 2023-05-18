(() => {
  const login = (data: {user: string, pass: string}) => {
    console.log(data.user, data.pass);
  }

  // login('rod', '1231234f');
  login({
    user: 'rod',
    pass: '211234'
  });

  //interface Product {}

  type Sizes =  'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Prod 1',
    createdAt: new Date(2001, 1, 1),
    stock: 14
  });

  addProduct({
    title: 'Prod 1',
    createdAt: new Date(2001, 1, 1),
    stock: 14,
    size: 'M'
  });
  console.log(products);
})()
