const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv')
const errorMiddleware = require('./component/errorMIddleWare.js')
dotenv.config()


const ProductRoutes = require("./routes/productRoutes.js");
const UserRoutes = require("./routes/userRoutes.js");
const OrderRoutes = require("./routes/orderRoutes.js");
const AuthRoutes = require("./routes/authRoutes.js");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/public',express.static('public'))

app.use(ProductRoutes);
app.use(OrderRoutes);
app.use(UserRoutes);
app.use(AuthRoutes);
app.use(errorMiddleware)

mongoose
  .connect(`mongodb://${process.env.DB_URI}/${process.env.DB_NAME}`)
  .then(() => {
    app.listen(process.env.APP_PORT,() =>
      console.log(
        `Server started on: http://127:.0.0.1:${process.env.APP_PORT}`
      )
    );
  });


