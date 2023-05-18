(() => {
  type Sizes =  'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    stock: number,
    size: Sizes,
    createdAt: Date,
    updatedAt: Date,
  ) {
    return {
      title,
      stock,
      size,
      createdAt,
      updatedAt,
    }
  }

  const product1 = createProductToJson(
    'Product 1',
    15,
    'S',
    new Date('2022-07-10 11:11:11'),
    new Date('2022-07-10 11:11:11'),
  )

  console.log(product1);

  const createProductToJsonV2 = (
    title: string,
    stock: number,
    createdAt: Date,
    updatedAt: Date,
    size?: Sizes,
  ) => {
    return {
      title,
      stock,
      size,
      createdAt,
      updatedAt,
    }
  }


  const product2 = createProductToJsonV2(
    'Product 1',
    15,
    new Date('2022-07-10 11:11:11'),
    new Date('2022-07-10 11:11:11'),
  );
  console.log(product2);

})()
