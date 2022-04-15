import mongoose from "mongoose"

const connection = {

}// This will check if we have connection to a DB or not

// if we dont we will create a connection

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    connection.isConnected = db.connections[0].readyState
    console.log(connection.isConnected);
}

export default dbConnect