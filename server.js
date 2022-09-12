let servestatic = require('serve-static')
let path = require('path')
let express = require('express')
let port = process.env.PORT || 8080;
app = express();

app.use(servestatic(path.join(__dirname, '/dist')));

app.listen(port, () => {console.log("API server started on "+app.get('port'));});