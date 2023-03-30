function updateTime() {
    var now = new Date();
    var hour = now.getUTCHours() + 2; // Horário de Amsterdam é UTC+2
    var minute = now.getUTCMinutes();
    var second = now.getUTCSeconds();
    document.getElementById('time').innerHTML = hour + ':' + minute + ':' + second;

    var days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    var day = days[now.getUTCDay()];
    document.getElementById('day').innerHTML = day;

    var months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];
    var month = months[now.getUTCMonth()];
    document.getElementById('month').innerHTML = month;
}

setInterval(updateTime, 1000);


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
      $('.temperature').text('Erro ao buscar temperatura');
    }
  });
});