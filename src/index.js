
 const app = require('./app');
require('./database');

app.set('port',process.env.PORT || 3000);



app.listen(app.get('port'), ()=> { console.log('server on port',app.get('port'));});