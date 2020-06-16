//Relojes Mundiales (5 principales)
//Horas de las siguientes ciudades: Madrid, Londres, Los Angeles, Nueva York, Sidney.


//Funcion para agregar un cero cuando la hora , minutos y segundos son 1..9

function ponerCero(i){
    if(i<10){
        i='0'+i;
    }
    return i;
}


//Fucion que da la hora de Madrid, corresponde con la de Baleares

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

//Funcion que Calcula la hora de Londres con respecto a Madrid

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

//Funcion que Calcula la hora de Los Angeles con respecto a Madrid

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

//Funcion que calcula la hora de Nueva York Con respecto a Madrid

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

//Funcion que calcula la hora de Sidney Con respecto a Madrid

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

//Se ejecuta a partir de la carga de la pagina.

window.onload = function() {
    relojMadrid();
    relojLondres();
    relojLA();
    relojNY();
    relojSidney();
}