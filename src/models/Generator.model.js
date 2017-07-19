
import Positions from '../../config/position.json'
import fs from 'fs'
import _ from 'lodash'


const toJSONFile = data => {
  
  fs.writeFile(
    './output/out.json',
    JSON.stringify(data, null, 4),
    'utf-8',
    function(err) {
      if (err) {
        throw err;
      }
      console.log('write json file successfully.');
    }
  );
};

const generate = dataObject => {
//console.log(dataObject)
  let results = [];
  let result = {};
  let page = {};
  let current_page = 0;
  Positions.forEach(position => {
    if (current_page !== position.p) {
      if (page[position.p]) {
        //console.log(page[position.p])
        results = page[position.p];
      } else {
        results = [];
      }
      current_page = position.p;
    }
    dataObject.forEach(data => {
      if (_.isArray(data)) {
       
        _.map(data, item => {
          result = {};
          if (position.key === Object.keys(item)[0]) {
            result.text = item[Object.keys(item)];
            result.x = position.x;
            result.y = position.y;
            result.optlist = 'script=thai boxsize={206 20}';
            results.push(result);
            
          }
        });
      } else {
        result = {};
        if (position.key === Object.keys(data)[0]) {
          result.text = data[Object.keys(data)];
          result.x = position.x;
          result.y = position.y;
          result.optlist = 'script=thai boxsize={206 20}';
          results.push(result);
          
        }
      }
    });
    page[current_page] = results;
  });
  //console.log(page)
  toJSONFile(page);
  //console.log(__dirname)
  //console.log(fs)
  return dataObject;
};

export default {
  generate
};

