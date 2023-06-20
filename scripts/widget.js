import { startWidget } from "./modules/widgetService.js";

const initWidget = (app) => {
    // const name = prompt('Как тебя зовут?');
    // alert('Привет, ' + name);

    const widget = startWidget();
    app.append(widget);
}

initWidget(document.querySelector('#app'));