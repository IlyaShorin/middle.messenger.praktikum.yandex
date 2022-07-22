const express = require('express');
const path = require('path');
const PORT = 3000;

const buildDirPath = path.join(__dirname, '../', 'dist/default');

const app = express();

app.use(express.static(buildDirPath));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/default/index.html'));
});

app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));
