import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 4000;
const DB_URL =
  'mongodb+srv://Alex:z6rJ6QbN4%40jSP%40f@cluster0.gn96i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// 'mongodb+srv://Alex:F5LHtgDdQEUShiTf@amu-test-db.yejlo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function start() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
