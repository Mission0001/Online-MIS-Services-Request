const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

//routers

const userRouter = require('./routes/Users')
app.use("/Users", userRouter);

const userAccRouter = require('./routes/UserAccount')
app.use("/Useraccount", userAccRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
})

});

