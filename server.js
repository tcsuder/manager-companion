const express = require('express');
const app = express();
app.use(express.static(__dirname + '/build/'));

app.listen(process.env.PORT || 8080, function(){
  console.log('THIS IS A LOG FORM SERVER');
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
