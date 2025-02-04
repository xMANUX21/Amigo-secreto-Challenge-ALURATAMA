// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos=[]

const ingreso=document.getElementById("amigo")


function agregarAmigo(){
    if(ingreso.value==''){
        alert("Por favor, inserte un nombre.")
    }else{
        amigos.push(ingreso.value)
        alert("Amigo agregado")      
    }
    ingreso.value=''
}

