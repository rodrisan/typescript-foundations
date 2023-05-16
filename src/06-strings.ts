(()=>{
  let productTitle = 'One product';
  productTitle = 'My amazing product title';

  let productDesc = "I'm Bla bla bla";
  console.log('productDesc', productDesc);

  let productPrice = 124;
  let isNew = false;

  const backtick = `
    title: ${productTitle}
    description: ${productDesc}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(backtick);
})()
