const weather = (() => {
    function convertData(data) {
        const {
            name: cityName,
            main: { temp: temperature, feels_like: feelsLike, humidity },
            wind: { speed: windSpeed },
        } = data
        return { cityName, temperature, feelsLike, humidity, windSpeed}
    }
    async function getData(city) {
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=16a50d27801abc5eeadd8407d3badd1a`
        try {
            const response = await fetch(endpoint, { mode: "cors"})
            if (!response.ok) throw new Error(`City ${city} not found!`)
            const data = convertData(await response.json())
        return data
        } catch (error) {
            alert(error)
            return null
        }
    }
    return { getData }
})()

export default weather

