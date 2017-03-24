// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient
    .connect('mongodb://localhost:27017/TodoApp', (err, db) => {
        if (err) {
            return console.log('Unable to connect to mongodb Server');
        }
        console.log('Connected to MongoDb server ');
        db.collection('Users').findOneAndDelete({_id:new ObjectID("58d282c44de2ca13b86ef617")})
                        .then((result)=>{
                            console.log(JSON.stringify(result,undefined,2));
                        });
        // db.collection('Todos').deleteOne({text:'eat lunch'})
        //                        .then((result)=>{
        //                         console.log(result);
        //                        });
        // db.collection('Todos').findOneAndDelete({ completed: false })
        //     .then((result) => {
        //         console.log(result);
        //     });
        // db.close();
    });
