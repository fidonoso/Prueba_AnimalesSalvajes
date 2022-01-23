import Animales from './Consulta.js'
const {animales} = await Animales.getData()

document.getElementById('animal').addEventListener('change', (an)=>{
    const nomAn = an.target.value
    const ImgAnimal=animales.find(a=>a.name==nomAn ).imagen
    document.getElementById('preview').innerHTML= `<img  class="rounded mx-auto d-block"  width="100%" height ="100%" src="/assets/imgs/${ImgAnimal}" />`

})