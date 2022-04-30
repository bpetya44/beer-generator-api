document.addEventListener('DOMContentLoaded', ()=>{

    fetch('https://api.punkapi.com/v2/beers/random')
    .then(response =>{
        return response.json()
    })
    .then(data => {
        //console.log(data);
        const name = data[0].name
        const description = data[0].description
        const image = data[0].image_url
        const unit = data[0].volume.unit
        const value = data[0].volume.value
        //console.log(image);
      
    })
})