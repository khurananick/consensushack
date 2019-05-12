module.exports = {
  base_url: function() {
    return "http://localhost:8080";
  },
  createAlexaTextResponse: function(text) {
    return {
      "version": "string",
      "sessionAttributes": {
        "key": "value"
      },
      "response": {
        "outputSpeech": {
          "type": "PlainText",
          "text": text,
          "playBehavior": "REPLACE_ENQUEUED"
        },
        "shouldEndSession": true
      }
    };
  }
};
