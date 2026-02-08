let city
let country
function get() {
    city = document.getElementById('search').value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=f81d0f8072c84e4cb3553800262601&q=${city}`).then(function (response1) {
        return response1.json();
    }).then(function (response2) {
        country = response2.location.country
        document.getElementById('country').value = country
    }).catch(function (err) {
        console.log('error1', err);
    });

    country = document.getElementById('country').value
    fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1`).then(function (res1) {
        return res1.json()
    }).then(function (res2) {
                document.getElementById("Namaztime").className = "Namaztime"
        console.log(res2);
        let date = res2.data.date.gregorian.date
        let hijri = res2.data.date.hijri.date
        let fajr = res2.data.timings.Fajr
        let dhuhr = res2.data.timings.Dhuhr
        let Asr = res2.data.timings.Asr
        let Maghrib = res2.data.timings.Maghrib
        let Isha = res2.data.timings.Isha
        let Sunrise = res2.data.timings.Sunrise
        console.log(hijri);
        console.log(date);
        console.log(fajr);
        console.log(dhuhr);
        console.log(Asr);
        console.log(Maghrib);
        console.log(Isha);
        console.log(country);
        console.log(Sunrise);


        document.getElementById('Namaztime').innerHTML = `<h2>${city}<span class=dn>, ${country}</span></h2>
        <p>Islamic Date: ${hijri}Hijri</p>
        <p>Fajr: ${fajr}</p>
        <p>Zuhr: ${dhuhr}</p>
        <p>Asr: ${Asr}</p>
        <p>Maghrib: ${Maghrib}</p>
        <p>Isha: ${Isha}</p>`
    })
}
