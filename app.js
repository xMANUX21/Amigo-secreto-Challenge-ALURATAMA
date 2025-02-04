// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos=[]

const ingreso=document.getElementById("amigo")
const lista=document.getElementById("listaAmigos")
const btnGuardar=document.querySelector('.button-add')

function agregarAmigo(){
    if(ingreso.value==''){
        alert("Por favor, inserte un nombre.")
    
    }else{
        amigos.push(ingreso.value)
        alert("Amigo agregado")      
    }
    ingreso.value=''
}


btnGuardar.addEventListener("click",()=>{
    lista.innerHTML=''
    for(const i of amigos){
        lista.innerHTML+=`<li>${i}</li>`
    }
})  