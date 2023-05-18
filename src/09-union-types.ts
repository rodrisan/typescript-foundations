(()=>{
  let userId: string | number;
  userId = 12;
  userId = '12';

  function greeting(userId: string | number) {
    if (typeof userId == 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    } else {
      console.log(`number ${userId.toFixed(1)}`);
    }
  }

  greeting(12);
  greeting('12');
})()
