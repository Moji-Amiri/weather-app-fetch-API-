
class UI {

    constructor() {
        this.cityCounty = document.querySelector('#city');
        this.date = document.querySelector('#date');
        this.temp = document.querySelector('.degree'); 
        this.tempDesc = document.querySelector('.Weather-desc'); 
        this.icon = document.querySelector('.weather_icon'); 
    }

    show(data) {
        this.cityCounty.innerHTML = `${data.name}, ${data.sys.country}`;
        // this.date.innerHTML = `${this.calculateUnixDate(data.timezone)}`;
        this.temp.innerHTML = `${Math.floor(data.main.temp)}&deg;`;
        this.tempDesc.innerHTML = `${data.weather[0].description}`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
        const infos = `
        <li>
            <p class="info--header">${Math.floor(data.main.temp_max)}&deg;</p>
            <p class="info--body">High</p>
          </li>
          <li>
            <p class="info--header">${Math.floor(data.wind.speed)}kph</p>
            <p class="info--body">Wind</p>
          </li>
          <li>
            <p class="info--header">${data.main.humidity}%</p>
            <p class="info--body">${data.weather[0].main}</p>
          </li>
          <li>
            <p class="info--header">${Math.floor(data.main.temp_min)}&deg;</p>
            <p class="info--body">Low</p>
          </li>
          <li>
            <p class="info--header">${data.main.humidity}%</p>
            <p class="info--body">${data.weather[0].main}</p>
          </li>
          <li>
            <p class="info--header">${this.calculateUnix(data.sys.sunset)}</p>
            <p class="info--body">Sunset</p>
          </li>
        `;
        document.querySelector('.secondry-info').innerHTML = infos;
    }

    calculateUnixTime(unix) {
        const date = new Date(unix * 1000);
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    clearInput() {
        document.querySelector('.input').value = "";
    }

}

export const ui = new UI();
