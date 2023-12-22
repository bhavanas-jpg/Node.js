/** it's an inbuilt method which is used to Read the first 
 * occurance of the data from the mongoDB collection.
 */

mongo.connect(new_db , function(error, db){
    if(error) throw error;

    db.collection("details").findOne({}, (err, collection)=>{
        if(err) throw err;
        console.log("Record Read successfully");
        console.log(collection);
        db.close();
    })
})