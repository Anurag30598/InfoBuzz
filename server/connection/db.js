import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb://${username}:${password}@ac-poco2tz-shard-00-00.68cbfd7.mongodb.net:27017,ac-poco2tz-shard-00-01.68cbfd7.mongodb.net:27017,ac-poco2tz-shard-00-02.68cbfd7.mongodb.net:27017/?ssl=true&replicaSet=atlas-g9jak0-shard-0&authSource=admin&retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;