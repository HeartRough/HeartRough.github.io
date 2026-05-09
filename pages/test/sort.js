function sort(){
    document.getElementById("demo").innerHTML = null;
    document.getElementById("demo_2").innerHTML = null;
    document.getElementById("demo_3").innerHTML = null;
    document.getElementById("demo_4").innerHTML = null;

    var a=Number(document.getElementById("a").value);
    var b=Number(document.getElementById("b").value);
    var c=Number(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(b)) {
        text = "输入错误";
    } else {
        text = "输入正确";
    }
    document.getElementById("demo").innerHTML = text;
    if(text=="输入正确"){
        if(a<b){
            d=a;
            a=b;
            b=d;
        }
        if(a<c){
            d=a;
            a=c;
            c=d;
        }
        if(b<c){
            d=b;
            b=c;
            c=d;
        }
        d="从大到小："+a+" "+b+" "+c;
        document.getElementById("demo_2").innerHTML = d;
        d="从小到大："+c+" "+b+" "+a;
        document.getElementById("demo_3").innerHTML = d;
        d="最大值："+a;
        document.getElementById("demo_4").innerHTML = d;
    }
}
//问题：输入内容为空无法检测。