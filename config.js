const { Module } = require("module")

const constants = {
    openWeatherMap: {
        BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
        SECRET_KEY: "53a1404ee46e9f97705227647edacd39"
    }
}

module.exports = constants;