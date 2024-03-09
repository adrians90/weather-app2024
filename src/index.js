import weather from "./weather.js"
import display from "./display.js"
import "./style.css"
import Image from "./background1.jpg"

const searchForm = document.getElementById("searchForm")
const searchInput = document.getElementById("searchInput")
const searchBtn = document.querySelector("[data-search-btn]")

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
})

searchBtn.addEventListener("click", async () => {
    if (searchInput.value === "") return
    const weatherData = await weather.getData(searchInput.value)
    display.setSearchResult(weatherData)
})