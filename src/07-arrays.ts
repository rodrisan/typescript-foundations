(()=>{
  let prices = [1,2,3,1,3,42,3, "text", true];
  // prices.push('dd');
  // prices.push(true);
  // prices.push({});
  prices.push(122);
  prices = [1,3,4];

  let products = ['text', true];
  // products.push(false);

  let mixed: (number | string | boolean | Object)[] = ['text', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3,1,3,42,3];
  numbers.map(item => item * 2);
})()
