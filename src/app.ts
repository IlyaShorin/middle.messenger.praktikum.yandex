import { Request, Response } from 'express';

const express = require('express');
const path = require('path');

const { PORT = 3000 } = process.env;

const buildDirPath: string = path.join(__dirname, '../', 'dist/default');

const app = express();

app.use(express.static(buildDirPath));
app.use('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../', 'dist/default/index.html'));
});

app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));
