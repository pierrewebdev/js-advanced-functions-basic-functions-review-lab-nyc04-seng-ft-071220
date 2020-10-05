// Your code here

//example of hosting
function hoistingEx(){
  console.log(myThoughts);
  console.log("waiting");
  console.log("waiting");
  
  var myThoughts;
  myThoughts = "I like PHP";
  
  // console.log(`When it comes to programming languages I think ${myThoughts}`);
}

hoistingEx()
