const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");


sumar.addEventListener("click", function (){
    //Cada vez que se presione el botón Agregar, se ejecutará este código.
    let salida = document.querySelector("#salida");
    let resultado = Number(salida.innerText) + 1;

     if(resultado > 10){
        resultado = 0;
    }


    salida.innerText = resultado;
});

restar.addEventListener("click",function (){
    let resultado = Number(salida.innerText) - 1;

    if(resultado < 0){
        resultado = 0;
    }
    salida.innerText = resultado;
});


