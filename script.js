const author = document.getElementById("image-author")
const crypto = document.getElementById("crypto-el")
const weather = document.getElementById("weather-el")
/*const euro = document.getElementById("euro")
const dollar = document.getElementById("dollar")*/
const currentTime = document.getElementById("time")




fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
.then(res => res.json())
.then(data => {
    /*console.log(data)*/
    document.body.style.backgroundImage = `url(${data.urls.regular}`
    author.innerHTML = `<p>By: ${data.user.first_name}</p>`
})

.catch(err=>{
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1571217668979-f46db8864f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDY0Nzk3NDU&ixlib=rb-1.2.1&q=80&w=1080)`
})

/*fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
.then(res=>{
    if(!res.ok){
        throw Error('something went wrong')
    } 
        return res.json()
})
.then(data=>{
   /* console.log(data)*/
 /*   crypto.innerHTML = `
                        <img src ='${data.image.small}'/><span>${data.id}</span>
                        
                    `
    euro.textContent += data.market_data.current_price.eur
    dollar.textContent += data.market_data.current_price.usd 
})

.catch(err => console.error(err))*/

function timeNow() {
    const time = new Date().toLocaleTimeString([], {timeStyle:"medium"});
    currentTime.textContent = time

}
setInterval(timeNow, 1000)

/*weather*/
navigator.geolocation.getCurrentPosition((position) => {
    /*console.log(position)*/
 fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    .then(res => {
        if(!res.ok){
            throw Error('sorry! something went wrong')
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        console.log(weatherIcon)
        weather.innerHTML = `
                            <img src = ${weatherIcon} />                          
                            <p>${Math.round(data.main.temp)}&#176;</p>
                            <p>${data.name}, ${data.sys.country}
                        `
        
        
    })
    .catch( err=> console.log(err))
})

