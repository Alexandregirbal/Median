var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(__dirname + '/dist'));


var Users = require("./routes/Users");
var Marks = require("./routes/Marks");
var Subjects = require("./routes/Subjects");


app.use("/api", Users);
app.use("/api", Marks);
app.use("/api", Subjects);


app.listen(port, function(){
    console.log('---------------------------------------------------------------');
    console.log("--------------  Server is running on port [" + port +"]  -------------");
    console.log('---------------------------------------------------------------\n');
});

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'median', 'index.html'));
});
