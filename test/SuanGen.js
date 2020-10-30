var a=prompt("What is the value of 'a'?\n","");
var b=prompt("What is the value of 'b'?\n","");
var c=prompt("What is the value of 'c'?\n","");

var root_part=Math.sqrt(b*b-4*a*c);
var denom=2*a;

var root1=(-b+root_part)/denom;
var root2=(-b-root_part)/denom;
if(!Number.isNaN(root1)){
    document.write("The first root is: ",root1,"</br>");
}
if(!isNaN(root2!=NaN)){
    document.write("The second root is: ",root2,"</br>");
}
// document.write(root1==NaN,"  ",root1,"   ",NaN);
