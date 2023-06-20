export const getcurrentDataTime = () => {
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

    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    return {
        dayOfMonths,
        month,
        year,
        hours,
        minutes,
        dayOfWeek,
    }

}