import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log('connect DB 👌')
} catch (error) {
    console.log('algo paso' +  error)
}