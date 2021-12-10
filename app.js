require("dotenv").config();
const Express = require("express");
const app = Express();
const dbConnection = require("./db");
const controllers = require("./controllers");
const cors = require('cors'); 

app.use(require("./middleware/headers"))

app.use(Express.json({limit: "10mb"}));

app.use(cors({
    origin: '*'
}));

app.use("/user", controllers.userController);// endpoint beginning with /user
app.use("/art", controllers.postsController); // endpoint beginning with /art

dbConnection.authenticate()
    .then(() => dbConnection.sync(
        //{force: true}
    ))
        .then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`Server is listening on port ${process.env.PORT}.`);
            });
        })
        .catch((err) => {
            console.log(`[Server]: Server crashed. Error = ${err}`);
        });

