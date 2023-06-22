import { fetchForecast, fetchWeather } from "./APIService.js";
import { renderWidgetForecast, renderWidgetOther, renderWidgetToday } from "./render.js";


export const startWidget = async () => {

    const city = 'Томск';
    const widget = document.createElement('div');
    widget.classList.add('widget');

    const dataWeather = await fetchWeather(city);

    if (dataWeather.success) {
        renderWidgetToday(widget, dataWeather.data);
        renderWidgetOther(widget, dataWeather.data);
    } else {
        showError(dataWeather.error)
    }

    const dataForecast = await fetchForecast(city);
    if (dataForecast.success) {
        renderWidgetForecast(widget, dataForecast.data);
    } else {
        showError(dataForecast.error)
    }
    return widget;
}