import { startWidget } from "./modules/widgetService.js";

const initWidget = async (app) => {

    const widget = await startWidget()
    // Это же самое можно записать по другому:
    //3)  const initWidget = (app) => {
    //5) startWidget().then(widget => {
    //app.append(widget); })

    app.append(widget);
}

initWidget(document.querySelector('#app'));