// Alias and literal types

(()=>{
   // Alias types.
  type UserID = string | number;
  let userId: UserID;

  function greeting(userId: UserID) {
    if (typeof userId == 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  // Literal Types
  type Sizes =  'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'L';
  shirtSize = 'M';
  shirtSize = 'S';
  shirtSize = 'XL';

  function greeting2(userId: UserID, size: Sizes) {
    if (typeof userId == 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }
  greeting2(5, 'M');
  greeting2('5', 'XL');
})()
