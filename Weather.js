
class Weather {

    constructor() {
        this.apiKey = 'dca69c626f95ae1ce2e6c33aaf2aa4a0';
    }

    async get(cityName) {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}&units=metric`);
        const data = await res.json();
        return data;
    }
}

export const weather = new Weather();

