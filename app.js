const Express = require("express");
const app = Express();

app.listen(3000, () => {
    console.log('Develop Branch');
    console.log(`[Server]: App is listening on 3000.`);
})