// JavaScript File

function decision(a, b, c){
    var d = Math.pow(b, 2) - 4 * a * c; 
    if(d == 0){
        var x = -b / (2 * a);
        alert('x= ' + x);
    }
    if(d < 0){
        alert("Коренів немає");
    }
    if(d > 0){
        var x1 = (-b + (Math.sqrt(d)) ) / (2 *a);
        var x2 = (-b - (Math.sqrt(d)) ) / (2 *a);
        alert('x1= ' + x1 + '   x2= ' + x2);
    }
}

function readInput(){
    var a = document.forms.form1.a.value;
    var b = document.forms.form1.b.value;
    var c = document.forms.form1.c.value;
    if( isNaN(a) || isNaN(b) || isNaN(c)){
        alert('Не корректний ввід даних');
    }else{
        if(a == 0){
            alert('Це рівняння не квадратне');
        }else
            if(b == 0){
                alert('Це рівняння не квадратне');
            }else
                if(c == 0){
                    alert('Це рівняння не квадратне');
                }else
                    decision(a, b, c);
    }
}

