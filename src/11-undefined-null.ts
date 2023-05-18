(()=>{
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 5;

  let myString: string | undefined = undefined;
  myString = '43';

  function hi1(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  // Optional chaining
  function hi2(name: string | null) {
    let hello = 'Hello ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hi2('ro');
  hi2(null);
})()
