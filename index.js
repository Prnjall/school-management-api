// index.js: Entry point — loads env vars and starts the Express server

require('dotenv').config();
const app = require('./src/app');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
