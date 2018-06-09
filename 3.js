function changePossibilities(amount, coinArr) {
    //an array to keep track of possible solutions for every coin along the way
    //every index of the array representing a possible coing value
    let possibilities = new Array(amount + 1).fill(0);
    //initially set up the zero index to 1 because a coin can never go into zero
    possibilities[0] = 1;
    //run a check for every coin
    coinArr.forEach((coin) => {
      //by setting i to the coin value in the loop we completely ignore any possibility for a coin that's greater than the amount
      //no such thing as a negative coin value (or is there???) so no need to worry about that either
      for (let i = coin; i <= amount; i++) {
        //at the matching coin index, add any possibilities leading up to the amount
        possibilities[i]+=possibilities[i-coin]
      }
    });
    //if everything goes well the last index of the possibilities array should have the total amount of possiblities
    return possibilities[amount];
  }