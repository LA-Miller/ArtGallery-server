require("dotenv").config();
const Express = require("express");
const app = Express();
const dbConnection = require("./db");
const controllers = require("./controllers");



app.use(Express.json());
app.use(require("./middleware/headers"))

app.use("/user", controllers.userController);// endpoint beginning with /user
app.use("/art", controllers.postsController); // endpoint beginning with /art


dbConnection.authenticate()
    .then(() => dbConnection.sync(
        // {force: true}
    ))
        .then(() => {
            app.listen(3000, () => {
                console.log(`[Server] :Listening on port 3000.`);
            });
        })
        .catch((err) => {
            console.log(`[Server]: Server crashed. Error =${err}`);
        });
    
