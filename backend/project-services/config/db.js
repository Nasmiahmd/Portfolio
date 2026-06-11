import mongoose from "mongoose";

export const connectdb = async() => {
    try {
        await mongoose.connect(process.env.mongoDB);
        console.log("DB connected Successfully");
    } catch (error) {
        console.log("Error with connecting MONGODB", error.message);
        process.exit(1);
    }
}