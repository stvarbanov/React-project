const app = require('express')();
const routes = require('./routes');
const { PORT } = require('./config/config');

require('./config/mongoose');
require('./config/express')(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}...`));