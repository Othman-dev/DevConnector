const app = require('express')();

app.get('/', (req, res) => res.send('API Running'));

//PORT & listen
const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
