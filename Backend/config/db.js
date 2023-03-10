const mongoose = require("mongoose");

const connectDB = async () => {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        dbName: "DevCamper_API",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log(
        `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
    );
};

module.exports = connectDB;
