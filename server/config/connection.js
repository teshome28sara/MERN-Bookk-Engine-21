const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||"mongodb+srv://bookreader:7372Pcell@cluster0.fmzyyn7.mongodb.net/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
