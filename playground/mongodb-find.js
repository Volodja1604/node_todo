// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient
    .connect('mongodb://localhost:27017/TodoApp', (err, db) => {
        if (err) {
            return console.log('Unable to connect to mongodb Server');
        }
        console.log('Connected to MongoDb server ');
        // db.collection('Todos').find({_id:new ObjectID("58d2a4bb949fff171c901e75")}).toArray().then((docs)=>{
        //    console.log('Todos');
        //    console.log(JSON.stringify(docs, undefined,2));
        // },(err)=>{
        //     console.log('Unable to fetch todos',err)
        // });
        //     db.collection('Todos').find().count().then((count)=>{
        //    console.log(`Todos count:${count}`);
        //    // console.log(JSON.stringify(docs, undefined,2));
        // },(err)=>{
        //     console.log('Unable to fetch todos',err)
        // });
             db.collection('Users').find({name:'Volodja'}).toArray().then((docs)=>{
           // console.log(`Todos count:${count}`);
           console.log(JSON.stringify(docs, undefined,2));
        },(err)=>{
            console.log('Unable to fetch todos',err)
        });
        // db.close();
    });
