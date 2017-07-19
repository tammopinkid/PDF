const fs = require('fs');
var eventString = require('../test/Events-JaFLVAPz');
var parsed = {};
eventString.events.forEach((element) => {
  if (element.fieldId) {
    parsed[element.fieldId] = {
      key: element.fieldId,
      payload: JSON.parse(element.payload)
    };
  }
});

var filename = '../test/parsed-event.json';
//var filename = './parsed-event.json';
fs.writeFileSync(filename, JSON.stringify(parsed, null, 2));
