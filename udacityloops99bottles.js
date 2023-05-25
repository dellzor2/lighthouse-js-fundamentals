const chorus = "bottles of juice on the wall!"
const chorus1 = "bottles of juice!"
const chorus2 = " Take one down, pass it around..."
var num = 99;

while (num > 0) { 
  if (num === 2) {
    console.log("2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!")
  }
  else if (num === 1) {
    console.log("1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!")
  }
  
   else
  console.log(num + " " + chorus + " " + num + " " + chorus1 + chorus2 + " " + (num-1) + " " + chorus);
  num--;
} 