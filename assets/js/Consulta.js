let animales =(()=>{ //IIFE
    const url ='http://127.0.0.7:5500/animales.json' //Montado con Live Server. Cuidado al ejecutar, debe ser el mismo puerto
    const getData =async()=>{
        const res= await fetch(url)
        const data =await res.json()
        return data
    }
    return {getData}
})();
export default animales