const mongoose = require("mongoose");
const conn = async () => {
  try {
    await mongoose.connect("mongodb+srv://anshika123:anshika123@cluster0.rjpyqzt.mongodb.net/taskify");
    console.log("Connected");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

conn();
