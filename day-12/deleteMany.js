/** deleteMany() is the inbuilt method of mongoDB which is
 * used to delete all the occurances of the data provided in 
 * the search query.
 */

mongo.connect(new_db, (error, db)=>{
    if(error) throw error;

    // Search query for deletion
    let query = {age : "above 22"};

    //Accessing the collection

    db.collection("details").deleteMany(query, (err, collection)=>{
        if(err) throw err;
        console.log(collection.result.n + "Record(s) deleted successfully");
        console.log(collection);
        db.close();
    })



})