// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos=[];
//Definimmos nuestras variables haciendo uso del DOM , llamando elementos del index
const ingreso=document.getElementById("amigo");
const lista=document.getElementById("listaAmigos");
const btnGuardar=document.querySelector('.button-add');
const resultado=document.getElementById('resultado')


//Funcion para agregar valores al array 
function agregarAmigo(){
    if(ingreso.value==''){
        alert("Por favor, inserte un nombre.");
    
    }else{
        amigos.push(ingreso.value);
        alert("Amigo agregado")   ;   
    };
    ingreso.value='';
};

//Boton que funciona al momento de agregar un dato para que lo muestre
btnGuardar.addEventListener("click",()=>{
    lista.innerHTML='';
    for(const i of amigos){
        lista.innerHTML+=`<li>${i}</li>`;
    };
});


// Funcion para sortear un amigo
function sortearAmigo(){
    if(amigos.length==0){
        alert("Array vacio");
    }else{
        let numeroAleatorio= Math.floor(Math.random()*amigos.length); // de esta forma tenemos un numero aleatorio dentro de la cantidad que tengamos en nuestro array
        let indexAmigos=amigos[numeroAleatorio] // de esta forma tenemos el valor de una posicion aleatorio de nuestro array
        resultado.innerHTML=indexAmigos // con esto podemos cambiar el valor de nuestro index
    };
};

