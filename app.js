const   express = require("express"),
        app = express();
        mongoose = require("mongoose");

const mongoURI = "mongodb+srv://devidle:" + process.env.MDBauth + "@cluster0-jcmtm.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    dbName: "wdbSecretPage",
    useFindAndModify: false
}, ).then(() => {
    console.log('Connected to Atlas DB!');
}).catch(err => {
    console.log('ERROR:', err.message);
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/secret", (req, res) => {
    res.render("secret");
});

app.listen(process.env.PORT, () => {
    console.log("Server started...");
});