function percentage(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var d = document.getElementById('d').value;
    var e = document.getElementById('e').value;
    var total = parseFloat(a)+parseFloat(b)+parseFloat(c)+ parseFloat(d)*2 +parseFloat(e)*2;
    var percentage =parseFloat(total)/5;
     document.getElementById("show").innerHTML="your percentage = "+percentage;
}