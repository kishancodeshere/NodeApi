const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://kishan134:wmKkxM30qeQv1ylU@kishan.vfx55pp.mongodb.net/?retryWrites=true&w=majority";

// mongoose
//   .connect(connectionString)
//   .then(() => console.log("connect in to DB...!"))
//   .catch((err) => console.log(err));

const ConnectDB = (url) => {
  return mongoose.connect(url);
};
module.exports = ConnectDB;
