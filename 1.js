function sortByStrings(s,t){
    // a key to hold matching values relative to 't'
    let key = {}
    // an array to hold letters that match the key from 's'
    let sortedArray = []
    // an array to hold any leftover letters
    let leftoverLetters = []
    // a helper function for later
    let pusher = function(arr,num,letter){
      arr.push(letter)
      num--
      if(num){
        pusher(arr,num,letter)
      }
    }
    
    // first loop creates the key
    for(let i = 0; i < t.length; i++){
      let letter = t[i]
      if(!key[letter]) key[letter] = 0
    }
    
    // second loop adds to the key for any matching letters
    for(let i = 0; i < s.length; i++){
      let letter = s[i]
      if(key.hasOwnProperty(letter)) key[letter]++
      // use hasOwnProperty (key[letter] initial value will always be 0 which will be falsy) to determine if the key has the letter's checked in 's' and increments accordingly
      else leftoverLetters.push(letter)
      // otherwise push it into the leftoverLetters array
    }
    
    // third loop uses a helper function to recursively push letters into the sortedArray based on their order in 't' and value in the key
    for(let i = 0; i < t.length; i++) {
      let letter = t[i]
      if(key[letter]) pusher(sortedArray,key[letter],letter)
    }
  
    return sortedArray.concat(leftoverLetters).join('')
  }