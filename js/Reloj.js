//Relojes Mundiales (5 principales)
//Horas de las siguientes ciudades: Madrid, Londres, Los Angeles, Nueva York, Sidney.

function ponerCero(i){
    if(i<10){
        i='0'+i;
    }
    return i;
}

function relojMadrid() {

    var fechaHora= new Date();
    h=fechaHora.getHours();
    m=fechaHora.getMinutes();
    s=fechaHora.getSeconds();

    h=ponerCero(h);
    m=ponerCero(m);
    s=ponerCero(s);

    var divReloj=document.getElementById("reloj");
    divReloj.innerHTML =`Madrid Hoy:  ${h}:${m}:${s}`;
    setTimeout('relojMadrid()',500);

}


function relojLondres() {

    var fechaHora= new Date();
    h=fechaHora.getHours();
    m=fechaHora.getMinutes();
    s=fechaHora.getSeconds();

    h=ponerCero(h);
    m=ponerCero(m);
    s=ponerCero(s);


    var divReloj=document.getElementById("relojLondres");
    divReloj.innerHTML =`Londres -1h: ${h-1}:${m}:${s}`;
    setTimeout('relojLondres()',500);

}

function relojLA() {

    var fechaHora= new Date();
    h=fechaHora.getHours();
    m=fechaHora.getMinutes();
    s=fechaHora.getSeconds();

    h=ponerCero(h);
    m=ponerCero(m);
    s=ponerCero(s);

    var divReloj=document.getElementById("relojLA");
    divReloj.innerHTML =`LA -9h: ${h-9}:${m}:${s}`;
    setTimeout('relojLA()',500);

}

function relojNY() {

    var fechaHora= new Date();
    h=fechaHora.getHours();
    m=fechaHora.getMinutes();
    s=fechaHora.getSeconds();

    h=ponerCero(h);
    m=ponerCero(m);
    s=ponerCero(s);


    var divReloj=document.getElementById("relojNY");
    divReloj.innerHTML =`NY -6h: ${h-6}:${m}:${s}`;
    setTimeout('relojLondres()',500);

}

function relojSidney() {

    var fechaHora= new Date();
    h=fechaHora.getHours();
    m=fechaHora.getMinutes();
    s=fechaHora.getSeconds();

    h=ponerCero(h);
    m=ponerCero(m);
    s=ponerCero(s);

    var divReloj=document.getElementById("relojSidney");
    divReloj.innerHTML =`Sidney +8h: ${h+8}:${m}:${s}`;
    setTimeout('relojSidney()',500);

    

}

window.onload = function() {
    relojMadrid();
    relojLondres();
    relojLA();
    relojNY();
    relojSidney();
}