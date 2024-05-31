// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
let mongoose = require('mongoose')


const connectdb = async () => {
    try {
       
        const url = "mongodb://admin:admin@ac-ziqhhmq-shard-00-00.5ohzqxz.mongodb.net:27017,ac-ziqhhmq-shard-00-01.5ohzqxz.mongodb.net:27017,ac-ziqhhmq-shard-00-02.5ohzqxz.mongodb.net:27017/?ssl=true&replicaSet=atlas-vewxng-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

        if (!url) {
            console.error("MongoDB connection URL is not defined in the .env file.");
            return;
        }

        await mongoose.connect(url,{
            dbName:"Royalagromfarm"
        });
    
        console.log("Connected to MongoDB");
   

    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
    }
};

module.exports =  connectdb ;
