import Animales from './Consulta.js'
const {animales} = await Animales.getData()

document.getElementById('animal').addEventListener('change', (an)=>{
    // alert("hola")
    // const {animales} = await Animales.getData()
    const nomAn = an.target.value
    // console.log(animales)
    const ImgAnimal=animales.find(a=>a.name==nomAn ).imagen
    // console.log(ImgAnimal)
document.getElementById('preview').innerHTML= `<img width="200" height ="218px" src="/assets/imgs/${ImgAnimal}" />`

})