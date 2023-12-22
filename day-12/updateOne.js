/**
 * It's an inbuilt method of mongodb which is used to search
 * the first ocuurence of the data and update it.
 */

mongo.connect(new_db, (err,db)=>{
    if(err) throw err;

    // Query parameter to used to search the collection
    let query = {name : "rishabhio"};
    // when the query matches the data in the db,
    // "data" parameter is used to update the value.
    let data = { name : "nodejsera.com", mobile: "12345677890"};

    // Accessing the collection using nodejs
    db.collection("details").updateOne(query, data, (err, collection) =>{
        if(err) throw err;
        console.log("record updated successfully");
        console.log(collection);
    })


})