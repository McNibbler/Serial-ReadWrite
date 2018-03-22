module.exports = function (app) {
    const moment = require('moment')
    
    //Setup connection to Mongo DB on mLab
    const MongoClient = require('mongodb').MongoClient
    var db
    const url = 'mongodb://justinmongo:aFoolishPass4Mongo@ds251845.mlab.com:51845/test-db-personal-website';
    MongoClient.connect(url, (err, database) => {
        if (err) return console.log(err)

        db = database
        port = 8083
        app.listen(port, () => {
            console.log('listening on ' + port)
        })
    })
    


    //Submit Temperature data
    app.post("/TempData", function (req, res) {
        let msg = req.body;

        var temperatureData = {
            temperature: msg.temperature,
            time: moment().format('YYYY-MM-DD HH:mm:ss Z'),
        };
        
        console.log(temperatureData);
        
        db.collection('temperatureOverTime').save(temperatureData, (err, result) => {
            if (err) return console.log(err)

            console.log('saved to database')
        });

        res.send({response: "Message recieved -JHB"})
        //res.sendStatus(200);
    })

    //Get Temperature Data
    app.get("/TempData", function (req, res) {
        console.log("Temperatures requested from DB...");

        var meals_db = {}

        db.collection('temperatureOverTime').find().sort({ $natural: -1 }).limit(50).toArray(function (err, results) {
            if (err) return console.log(err)

            console.log("Data sent from DB")
            res.send({data: results})
        })
        /*
        db.collection('temperatureOverTime').find({}).toArray(function (err, results) {
            if (err) return console.log(err)

            console.log("Data sent from DB")
            res.send({data: results})
        })
        */
    });

    //Submit Temperature data
    app.post("/unisonData", function (req, res) {
        console.log(msg);
        let msg = req.body;

        var postData = {
            data: msg.data,
            time: moment().format('YYYY-MM-DD HH:mm:ss Z'),
        };
        
        console.log(postData);
        
        db.collection('unisonData').save(postData, (err, result) => {
            if (err) return console.log(err)

            console.log('saved to database')
        });

        res.send({response: "Message recieved -JHB"})
        //res.sendStatus(200);
    })

    /*
    .sort()
db.foo.find().sort({x:1});
The 1 will sort ascending (oldest to newest) and -1 will sort descending (newest to oldest.)

If you use the auto created _id field it has a date embedded in it ... so you can use that to order by ...

db.foo.find().sort({_id:1});
That will return back all your documents sorted from oldest to newest.

Natural Order
You can also use a Natural Order mentioned above ...

db.foo.find().sort({$natural:1});
Again, using 1 or -1 depending on the order you want.

Use .limit()
Lastly, it's good practice to add a limit when doing this sort of wide open query so you could do either ...

db.foo.find().sort({_id:1}).limit(50);
or

db.foo.find().sort({$natural:1}).limit(50);

*/

    //Send status dictionary
    /*
    res.sendStatus(200); // equivalent to res.status(200).send('OK')
    res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
    res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
    res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
    */

};