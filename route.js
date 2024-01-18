module.exports = function(app) {
    app.route("/test")
        .get(function(req, res){
            res.json("This is our Get method");
        })
        .post(function(req, res){
            res.json("zapytanie do systemu  "  + req.body.name);
        });
}