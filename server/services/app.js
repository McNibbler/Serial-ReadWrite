module.exports = function (app) {

    //Nomsly
    var API = require("./API.js");
    API(app);

    //Call and Responce Basic
    app.get("/say/:message", function (req, res) {
        var msg = req.params["message"];
        console.log(msg);
        res.send({ message: msg });
    });
};