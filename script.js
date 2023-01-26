const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const dataDia = document.getElementById('dia')
const dataMes = document.getElementById('mes')
const dataAno = document.getElementById('ano')


const timer = setInterval(function relogio() {
    let dataDeHoje = new Date();
    let hr = dataDeHoje.getHours();
    let min = dataDeHoje.getMinutes();
    let seg = dataDeHoje.getSeconds();
    let d = dataDeHoje.getDate();
    let m = dataDeHoje.getMonth() + 1;
    let a = dataDeHoje.getFullYear();
    






    if (hr < 10) { hr = '0' + hr }

    if (min < 10) { min = '0' + min }

    if (seg < 10) { seg = '0' + seg }

    if (d < 10) { d = '0' + d }

    if (m < 10) { m = '0' + m }



    horas.innerHTML = hr;
    minutos.innerHTML = min;
    segundos.innerHTML = seg;

    dia.innerHTML = d;
    mes.innerHTML = m;
    ano.innerHTML = a;
    
    
})

