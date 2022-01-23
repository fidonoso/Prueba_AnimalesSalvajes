import  {Leon, Lobo, Oso, Serpiente, Aguila} from './clases/tiposDeAnimales.js'

let listadeanimales=[]
var btnRegistrar =document.getElementById('btnRegistrar')
btnRegistrar.addEventListener('click',(e)=>{
    try{
        let nombreAnimal = document.getElementById('animal')
        let edadAnimal =document.getElementById('edad')
        let comentariosAnimal =document.getElementById('comentarios')
        let imagenAnimal =document.querySelector('#preview img').src
        let nuevoAnimal
        if(nombreAnimal.value =='Seleccione un animal' || edadAnimal.value =='Seleccione un rango de años'){
            throw new Error(`edad`)
        }
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

        listadeanimales.push(nuevoAnimal)
        cargaranimales()
        nombreAnimal.selectedIndex=0
        edadAnimal.selectedIndex=0
        comentariosAnimal.value=''
        document.querySelector('#preview').innerHTML=''
        document.querySelector('#preview').style.backgroundImage="assets/imgs/lion.svg"
    }catch(er){
        if(er=='Error: edad'){
            alert(`Falta edad de ${document.getElementById('animal').value}`)
        }else{
            alert("Seleccione un animal")

        }
    }
})

const cargaranimales=()=>{
    var animalitos = document.getElementById('Animales')
    animalitos.innerHTML=''
    listadeanimales.forEach((el, index)=>{
        animalitos.innerHTML+=`
        <div class="${el.getNombre()} my-2 p-3">
        <img src="${el.getImg()}" onclick="vermodal(${index})" width="200" height="200 "alt=""><br>
        <img src="assets/imgs/audio.svg" onclick="document.querySelector('.${el.getNombre()} audio').play()" width="200" height="40 " style="background-color: darkgray;" alt="">
        <audio  >
          <source src="${el.getSonido()}" type="audio/mpeg"></source>
        </audio>          
      </div>`
    })
}
window.vermodal=(index)=>{
    const bestia=listadeanimales[index]
    var Amodal= document.querySelector('.modal-body')
    Amodal.innerHTML=`
    <div class="text-center text-light  mx-auto">
        <img src="${bestia.getImg()}" class="rounded mx-auto d-block" width="100%" height ="100%" alt="${bestia.getNombre()}"/>            
        <p>${bestia.getEdad()}</p>
        <p>Comentarios:</p>
        <p>${bestia.getComentarios()}</p>            
    </div>`
    $("#exampleModal").modal("toggle")
}