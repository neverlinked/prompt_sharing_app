import mongoose from 'mongoose';

let isConnected = false; // track the connection status

export const connectToDB = async() => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDb is already connnected')
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
    } catch (error) {

    }
}