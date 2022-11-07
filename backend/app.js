const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/config.json');
const {
  authroute,
  userroute,
  adminroute,
  shopkeeperroute
} = require('./router/router');
const logger = require('./logger');
const app = express();
app.use(express.json());
app.use(authroute);
app.use(userroute);
app.use(adminroute);

app.use(shopkeeperroute);
app.use(cors({ origin: '*' }));
mongoose
  .connect(db.url)
  .then(() => {
    console.log('mongodb connected ');
  })
  .catch((err) => {
    console.log('mongodb not connected', err);
  });
const port = process.env.PORT || db.port;
app.listen(port, () => {
  console.log(`server is connected.... ${port}`);
  logger.info(`Server started and running on  ... ${port}`);
});
