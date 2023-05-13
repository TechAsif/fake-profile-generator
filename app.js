const express = require('express');
const personRoutes = require('./routes/personRoutes');

const app = express();
app.use(express.json());

app.use('/fakeprofiles',personRoutes);

app.listen(3000,() => {
    console.log(`Server is running on port 3000`);
})


