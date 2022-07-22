const express = require('express');
const path = require('path');
const PORT = 3000;

const buildDirPath = path.join(__dirname, '../', 'dist');

const app = express();

app.use(express.static(buildDirPath));

app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));
