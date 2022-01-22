import  {Leon, Lobo, Oso, Serpiente, Aguila} from './clases/tiposDeAnimales.js'

let listadeanimales=[]
var btnRegistrar =document.getElementById('btnRegistrar')
btnRegistrar.addEventListener('click',(e)=>{
// alert("hola")
$("#exampleModal").modal("toggle")
let nombreAnimal = document.getElementById('animal')
let edadAnimal =document.getElementById('edad')
let comentariosAnimal =document.getElementById('comentarios')
let imagenAnimal =document.querySelector('#preview img').src
console.log(imagenAnimal)

let nuevoAnimal
console.log(nombreAnimal.value)


if(nombreAnimal.value=='Leon'){
    nuevoAnimal = new Leon(nombreAnimal.value, edadAnimal.value, imagenAnimal, comentariosAnimal.value, 'assets/sounds/Rugido.mp3')
}
if(nombreAnimal.value=='Lobo'){
    nuevoAnimal = new Lobo(nombreAnimal.value, edadAnimal.value, imagenAnimal, comentariosAnimal.value, 'assets/sounds/Aullido.mp3')
}
if(nombreAnimal.value=='Oso'){
    nuevoAnimal = new Oso(nombreAnimal.value, edadAnimal.value, imagenAnimal, comentariosAnimal.value, 'assets/sounds/Gruñido.mp3')
}
if(nombreAnimal.value=='Serpiente'){
    nuevoAnimal = new Serpiente(nombreAnimal.value, edadAnimal.value, imagenAnimal, comentariosAnimal.value, 'assets/sounds/Siseo.mp3')
}
if(nombreAnimal.value=='Aguila'){
    nuevoAnimal = new Aguila(nombreAnimal.value, edadAnimal.value, imagenAnimal, comentariosAnimal.value, 'assets/sounds/Chillido.mp3')
}

var Amodal= document.querySelector('.modal-body')
Amodal.innerHTML=` <div class="text-center text-light  mx-auto">
<img src="${nuevoAnimal.getImg()}" class="rounded mx-auto d-block" width="100%" height ="100%" alt="${nuevoAnimal.getNombre()}"/>            
  <p>${nuevoAnimal.getEdad()}</p>
  <p>Comentarios:</p>
  <p>${nuevoAnimal.getComentarios()}</p>            
</div>`

listadeanimales.push(nuevoAnimal)
console.log(listadeanimales)
})