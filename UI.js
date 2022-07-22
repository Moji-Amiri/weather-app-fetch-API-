
class UI {

    constructor() {
        this.cityCounty = document.querySelector('#city');
        this.date = document.querySelector('#date');
        this.temp = document.querySelector('.degree'); 
        this.tempDesc = document.querySelector('.weather_desc'); 
        this.icon = document.querySelector('.weather_icon'); 
    }

    show(data) {
        this.cityCounty.innerHTML = `${data.name}, ${data.sys.country}`;
        // this.date.innerHTML = `${this.calculateUnixDate(data.timezone)}`;
        this.temp.innerHTML = `${Math.floor(data.main.temp)}`;
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
            <p class="info--header">${Math.floor(data.main.pressure * 0.014)}</p>
            <p class="info--body">Psi</p>
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
            <p class="info--header">----</p>
            <p class="info--body">----</p>
          </li>
        `;
        document.querySelector('.secondry-info').innerHTML = infos;
    }


    clearInput() {
        document.querySelector('.input').value = "";
    }

}

export const ui = new UI();
