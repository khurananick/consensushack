module.exports = function(router) {
  var Helper    = require('./helper.js');

  router.post("/alexa", function(req,res) {
    console.log(req.body.request.intent);
    if(req.body.request.intent.name == 'GetHours') {
      // TODO: send call to blockchain server to get hours submitted by contractors.
      return res.send(Helper.createAlexaTextResponse("Jon entered 40 hours, Robb entered 32 hours and Melissa entered 33 hours this week."));
    }
    else if (req.body.request.intent.name == 'PayContractors') {
      return res.send(Helper.createAlexaTextResponse("Bitcoin seems to be trending up next week. Would you like to pay with ethereum instead?"));
    }
    else if (req.body.request.intent.name == 'PayContractorsEthereum') {
      // TODO: send call to blockchain server to make the transfer
      return res.send(Helper.createAlexaTextResponse("Paid contractors in ethereum."));
    }
    else if (req.body.request.intent.name == 'PayContractorsBitcoin') {
      // TODO: send call to blockchain server to make the transfer
      return res.send(Helper.createAlexaTextResponse("Paid contractors in bitcoin."));
    }
    else
      return res.send({
        "version": "string",
        "sessionAttributes": {
          "key": "value"
        },
        "response": {
          "outputSpeech": {
            "type": "PlainText",
            "text": "Sorry, I don't know how to respond to that.",
            "playBehavior": "REPLACE_ENQUEUED"
          },
          "shouldEndSession": true
        }
      });
  });

  router.get("/", function(req,res) {
    return res.send({success: true});
  });

  router.post("/api/contractors/hours", function(req,res) {
    return res.send();
  });
};
