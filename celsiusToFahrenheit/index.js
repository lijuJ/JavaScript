a=int(document.getElementById('input').value);
b=document.getElementById('result');
function convert(a){
    x=(9/5)*a+32;
    b.value=x;
}
btn=document.getElementById('btn').click(convert(a));