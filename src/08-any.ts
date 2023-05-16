(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  // Cast
  myDynamicVar = 'Hello';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  // Generics
  myDynamicVar = 1245;
  const rte = (<number>myDynamicVar).toFixed();
  console.log(rte);
})()
