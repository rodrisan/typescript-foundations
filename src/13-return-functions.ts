(()=>{
  // Functions return and void.

  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`The total is: ${rta}`);
  }

  printTotal([12,23,43,23,3,1,2]);
})()
