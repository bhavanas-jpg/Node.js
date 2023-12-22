
mongo.connect(new_db , (err, db) => {
    if(err) throw error;

    let data = {
        name: "Bhavana S",
        age: 27,
        mobile: "9740132963"
    }

    db.collection("details").insertOne(data, (err, collection)=>{
        if(err) throw err;
        console.log("Record inserted successfully");
        console.log(collection);

    })
}
)