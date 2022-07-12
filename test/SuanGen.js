// var a=prompt("What is the value of 'a'?\n","");
// var b=prompt("What is the value of 'b'?\n","");
// var c=prompt("What is the value of 'c'?\n","");
// var d=b*b-4*a*c
// var root_part=Math.sqrt(d);
// if(a==0){
//     document.write("There is only one root: ",-1*c/b,"<br/>");
//     throw SyntaxError();//结束脚本运行
// }
// if (d<0){
//     document.write("There is no root.<br/>");
// }

// var denom=2*a;
// var root1=(-b+root_part)/denom;
// var root2=(-b-root_part)/denom;

// if (d==0){
//     document.write("There is only one root: ",root1,"<br/>");
// }
// if (d>0){
//     document.write("The first root is: ",root1,"</br>");
//     document.write("The second root is: ",root2,"</br>");
// }
// if(!Number.isNaN(root1)){
//     document.write("The first root is: ",root1,"</br>");
// }
// if(!isNaN(root2!=NaN)){
//     document.write("The second root is: ",root2,"</br>");
// }
// document.write(root1==NaN,"  ",root1,"   ",NaN);
function enter(){
    var a = document.getElementsById("first");
    var b = document.getElementsById("second");
    var c = document.getElementsById("third");
    var d=b*b-4*a*c
    var root_part=Math.sqrt(d);
    if(a==0){
        document.write("There is only one root: ",-1*c/b,"<br/>");
        throw SyntaxError();//结束脚本运行
    }
    if (d<0){
        document.write("There is no root.<br/>");
    }

    var denom=2*a;
    var root1=(-b+root_part)/denom;
    var root2=(-b-root_part)/denom;

    if (d==0){
        document.write("There is only one root: ",root1,"<br/>");
    }
    if (d>0){
        document.write("The first root is: ",root1,"</br>");
        document.write("The second root is: ",root2,"</br>");
    }
}