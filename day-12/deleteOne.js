/** deleteOne() is the inbuilt method of mongodb,
 * which is used to delete the first occurence of the data provided in 
 * the search query
 */

mongo.connect(new_db, (err,db)=>{
    if(err) throw err;

    // query stores the search condition
    let query = {age: "above 22"};

    // Accessing a collection in mongoDB using node.js
    db.collection("details").deleteOne(query, (err,collection)=>{
        if(err) throw err;
        console.log(collection.result.n + "Record(s) deleted successfully");
        console.log(collection);
        db.close();
    })
})