//Reverse a String
var str= prompt("enter a string ");
var len = str.length;
var rev = "";
for (var i=len-1;i>=0; i--){
rev=rev+str.charAt(i);
}
console.log(" The reversed string is" + rev);
