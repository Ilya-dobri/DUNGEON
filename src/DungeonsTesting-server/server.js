import express from 'express';
import cors from 'cors';

import { getDungeon, getDungeons } from './controllers/dungeons.js';

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/dungeons', getDungeons);
app.use('/DungeonsTesting-server', express.static(path.join(__dirname, 'DungeonsTesting-server')));
app.get('/dungeons/:id', getDungeon);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`http://localhost:${PORT}`);
});
