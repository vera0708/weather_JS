import { fetchWeather } from "./APIService.js";
import { renderWidgetForecast, renderWidgetOther, renderWidgetToday } from "./render.js";


export const startWidget = async () => {
    const widget = document.createElement('div');
    widget.classList.add('widget');

    const dataWeather = await fetchWeather('Томск');

    if (dataWeather.success) {
        renderWidgetToday(widget, dataWeather.data);
        renderWidgetOther(widget, dataWeather.data);
    } else {
        showError()
    }
    console.log(dataWeather)
    renderWidgetForecast(widget);

    return widget;
}