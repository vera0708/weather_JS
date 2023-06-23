export const getcurrentDataTime = () => {
    const addZero = (n) => n < 10 ? `0${n}` : n;

    const months = [
        '',
        'янв',
        'фев',
        'март',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек',
    ];
    const weekdays = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
    ];
    const date = new Date();
    const dayOfMonths = date.getDate();
    const month = months[date.getMonth()];
    const dayOfWeek = weekdays[date.getDay()];
    const year = date.getFullYear();

    let hours = addZero(date.getHours());
    let minutes = addZero(date.getMinutes());

    return {
        dayOfMonths,
        month,
        year,
        hours,
        minutes,
        dayOfWeek,
    }
};

// export const getWindDirection = (deg) => {
//     const directions = [
//         '&#8593;',
//         '&#8598;',
//         '&#8592;',
//         '&#8601;',
//         '&#8595;',
//         '&#8600;',
//         '&#8594;',
//         '&#8599;',
//     ];
// https://symbl.cc/ru/unicode/blocks/arrows/
//     const i = Math.round(deg / 45) % 8;
//     return directions[i];
// };

export const getDewPoint = (temp, humidity) => {
    const a = 17.27;
    const b = 237.3;
    const addfunc = a * ((temp - 273.15)) / (b + (temp - 273.15)) + Math.log((humidity) / 100);
    const dewPoint = b * addfunc / (a - addfunc);
    return dewPoint.toFixed(1);
};

export const convertPressure = (pressure) => {
    const mmHg = pressure * 0.750063755419211;
    return mmHg.toFixed(2);
};

export const getWeatherForecastData = (data) => {
    const forecast = data.list.filter(
        (item) => {
            return new Date(item.dt_txt).getHours() === 12 &&
                new Date(item.dt_txt).getDate() > new Date().getDate() &&
                new Date(item.dt_txt).getDate() < new Date().getDate() + 5
        });

    const forecastData = forecast.map((item) => {
        const date = new Date(item.dt_txt);
        const weekdaysShot = [
            'вск',
            'пон',
            'вт',
            'ср',
            'чет',
            'пят',
            'суб',
        ];

        const dayOfWeek = weekdaysShot[date.getDay()];
        const weatherIcon = item.weather[0].icon;

        let minTemp = Infinity;
        let maxTemp = -Infinity;

        for (let i = 0; i < data.list.length; i++) {
            const temp = data.list[i].main.temp;
            const tempDate = new Date(data.list[i].dt_txt);
            if (tempDate.getDate() === date.getDate()) {
                if (temp < minTemp) {
                    minTemp = temp;
                }
                if (temp > maxTemp) {
                    maxTemp = temp;
                }
            };
        }
        return {
            dayOfWeek,
            weatherIcon,
            minTemp,
            maxTemp,
        };
    });
    console.log(forecast);
    return forecastData;
};
// Как ощущается температура :
// const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
