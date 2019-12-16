window.addEventListener('load', () => {

    let long;
    let lat;
    let timezoon = document.querySelector(".timezoon");
    let temper = document.querySelector(".temper");
    let tem_dec = document.querySelector(".tem_dec");




    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/22bdf2125d79d731d62c409b3390b814/${lat},${long}`;

            fetch(api)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    const {
                        temperature,
                        summary
                    } = data.currently;
                    temper.textContent = temperature;
                    tem_dec.textContent = summary;
                    timezoon.textContent = data.timezone;


                })
        })



    }






})