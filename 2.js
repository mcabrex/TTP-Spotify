function decodeString(s){
    //base case, if it has any opening bracket then it still needs to be decoded further
    if(!s.includes('[')) return s 
    //blank str to recursively call the function with later
    let newStr = ''
    //array to keep track of opening brackets
    let brackets = []
  
    //helper decoder function
    function decoder(num,str){
      let newStr = ''
      for(let i = 0; i < +num; i++){
        newStr+=str
      }
      return newStr
    }
  
    //meat of the problem to loop through the string with
    for(let i = 0; i < s.length; i++){
      let curr = s[i]
      //push opening brackets into the brackets array
      if(curr === '[') brackets.push(i)
      if(curr === ']'){
        let lastBracket = brackets[brackets.length-1]
        //make a newStr equal to the most inner part of the string to decode
        newStr = 
          //from the start of the string to the last bracket to check 
          s.slice(0,lastBracket-1) +
          //use helper function to decode the inner most string part
          decoder(s[lastBracket-1],s.slice(lastBracket+1,i)) +
          //add whatever's left in case there's any letters outside of the last bracket
          s.slice(i+1,s.length)
        //recurseively call the function with the newStr which will gradually have parts of it decoded until it reaches the base case
        return decodeString(newStr)
      }
    }
  } 