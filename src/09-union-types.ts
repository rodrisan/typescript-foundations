(()=>{
  let userId: string | number;
  userId = 12;
  userId = '12';

  function greeting(text: string | number) {
    if (typeof text == 'string') {
      console.log(`string ${text.toLowerCase()}`);
    } else {
      console.log(`number ${text.toFixed(1)}`);
    }
  }

  greeting(12);
  greeting('12');
})()
