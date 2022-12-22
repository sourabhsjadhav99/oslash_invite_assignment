const express = require("express");
const app = express();
require("./schemas_connection/config")
const adduserRoutes = require("./Routes/newUser")
const getGroupRoutes = require("./Routes/getData")
let port =8000
app.use("/data", getGroupRoutes)
app.use("/share", adduserRoutes )
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;