/*** find is an inbuilt method which is used to Read
 * all data from the mongoDb collection
 */

mongo.connect(new_db , function(err, db){
    if(err) throw err;

    //Read all the data from the "details" collection.
    db.collection("details").find({}).toArray((err, collection)=>{
        if(err) throw err;
        console.log("Record read successfully");
        console.log(collection);
        db.close();
    })
})