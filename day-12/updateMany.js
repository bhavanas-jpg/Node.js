/** It's an inbuilt method of mongodb which is used to search
 * for the given query and update all its occurences
 * 
 */

mongo . connect(new_db , (error, db)=>{
    if(error) throw error;


    let query = {age: {$gt: "22"}};
    let data = {
        $set : { age : "above 22"}
    }

    db.collection("details").updateMany(query, data, (err, collection)=>{
        if(err) throw err;
        console.log(collection.result.nModified + "record(s) updated successfully");
        //It will console the number of rows updated
        console.log(collection);
        db.close();
    })
})