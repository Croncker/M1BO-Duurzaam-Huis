function updateTime() {
    var now = new Date();
    var hour = now.getUTCHours() + 2;
    var minute = now.getUTCMinutes();
    var second = now.getUTCSeconds();
    document.getElementById('time').innerHTML = hour + ':' + minute + ':' + second;

    var days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    var day = days[now.getUTCDay()];
    document.getElementById('day').innerHTML = day;

// Maak een nieuw date object aan
var datum = new Date();

// Haal de dag van de maand op
var dag = datum.getDate();

// Haal de maandnaam op
var maanden = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
var maand = maanden[datum.getMonth()];

// Toon de datum op de pagina
document.getElementById("datum").innerHTML =  dag + " " + maand + "";
}

setInterval(updateTime, 1000);


// Weerbericht

const apiKey = 'd103474f09b04cf7637f8989be03a3f7';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=${apiKey}`;

$(document).ready(() => {
  $.ajax({
    url: apiUrl,
    success: (data) => {
      const temperature = Math.round(data.main.temp);

      $('.temperature').text(`${temperature}°C`);
    },
    error: () => {
      $('.temperature').text('Error');
    }
  });
});

// Zonsondergang

const zonParagraaf = document.getElementById("zonParagraaf");
const zonParagraaf2 = document.getElementById("zonParagraaf2");
let data = fetch("https://api.sunrisesunset.io/json?lat=52.3910379&lng=4.8569872&timezone=UTC&date=today")
  .then(
    function(binnengekomendata){
        return binnengekomendata.json();
    }).then(
        function(echtedata){
            zonParagraaf.innerText = echtedata.results.sunrise;
            zonParagraaf2.innerText = echtedata.results.sunset;
        }
    );


const labels = [
    "Wasmachine",
    "Stofzuiger",
    "Verwarming",
    "Droger",
    "vaatwasser",
    "koelkast",
    "vriezer",
];

const dataEnergieVerbuik = {
    labels: labels,
    datasets:[
        {
            label: "EnergieVerbruik apparaten in kWh in een jaar.",
            
            data: [100, 80, 500, 130, 200, 400, 250],
            backgroundColor: ["#31A29F", "#31A29F", "#31A29F", "#31A29F"]
            
        }
    ]
};

const config = {
    type: "bar",
    data: dataEnergieVerbuik,
};

new Chart(document.getElementById("energieCanvas"), config);



const labels1 = [
  "januari",
  "februari",
  "maart",
  "april",
  "mei",
  
];

const datastroomVerbuik = {
  labels: labels1,
  datasets:[
      {
          label: "StroomVerbruik .",
          data: [207.199635,339.499346, 280.011994, 267.361701, 297.361701,],
          backgroundColor: ["#31A29F", "#31A29F", "#31A29F", "#31A29F"]
      }
  ]
};

const config1 = {
  type: "line",
  data: datastroomVerbuik,
};

new Chart(document.getElementById("stroomCanvas"), config1);



const labels2 = [
  "januari",
  "februari",
  "maart",
  "april",
  "mei",
  

  
];

const datagasVerbuik = {
  labels: labels2,
  datasets:[
      {
          label: "GasVerbruik .",
          data: [85.726689,221.151088, 188.0141, 227.361701, 158.611141,134,243],
          backgroundColor: ["#31A29F", "#31A29F", "#31A29F", "#31A29F"]
          
          
      }
  ]
};

const config2 = {
  type: "line",
  data: datagasVerbuik,
  
};



new Chart(document.getElementById("gasCanvas"), config2);