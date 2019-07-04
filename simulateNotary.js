/* eslint-disable  */
// Will be changed to require ('FactomSDK') after publish
const configure = require("./configure");

var Twit = require("promised-twit");

var T = new Twit(configure);

// Handle node response
const responseData = (response, data) => {
    console.log('YO', response);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(data), "utf-8");
};

module.exports =  (request, response) => {
    // Init factom sdk with your appId and appKey, which can be found or generated at https://account.factom.com

    // try {
        // Create identity without keys. System automatic generating 3 key pairs.

        return  T.get(
            "statuses/user_timeline",
            { screen_name: "realDonaldTrump", count: 10 },
            function(err, data, response) {

                // console.log('data', data)
                return data.map(function(val) {
                    console.log("TWEET TWEET!:  ", val.text);
                    responseData(response, {
                        statuses: response
                    });

                    // return val.text;
                });
            }
        );


    // } catch (error) {
    //     console.log(error);
    // }
};
