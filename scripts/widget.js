import { cityServiceSearch } from "./modules/cityServiceSearch.js";
import { startWidget } from "./modules/widgetService.js";

const initWidget = async (app) => {
    // const city = 'Томск';
    const widget = await startWidget();
    // Это же самое можно записать по другому:
    //3)  const initWidget = (app) => {
    //5) startWidget().then(widget => {
    //app.append(widget); })

    app.append(widget);

    cityServiceSearch(widget);
};

initWidget(document.querySelector('#app'));