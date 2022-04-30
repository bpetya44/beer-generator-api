document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    const beerImg = document.querySelector('.beer-img')

    function getData() {

        fetch('https://api.punkapi.com/v2/beers/random')
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                const name = data[0].name
                const description = data[0].description
                const image = data[0].image_url
                const unit = data[0].volume.unit
                const value = data[0].volume.value
                //console.log(image);

                randomBeer.innerHTML = name + ' ' + value + ' ' + unit
                descriptionDisplay.innerHTML = description
                beerImg.src = image
            })
            .catch(err => {
        console.log(`error ${err}`)
        })
    }
    startBtn.addEventListener('click', getData)
})