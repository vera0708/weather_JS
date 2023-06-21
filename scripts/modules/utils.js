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
