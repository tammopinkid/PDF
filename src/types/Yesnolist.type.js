import _ from 'lodash';
const compile = item => {
  const key = item.fieldId;
  const values = JSON.parse(item.payload).params.value; //item.payload.params.value//JSON.parse(item.payload).params.value
  console.log(values);
  let result = [];
  _.map(values, (value, index) => {
    let final_key;
    _.map(value.checked, (item, key2) => {
      if (item == true) {
        final_key = key + '[' + value.value + ']' + '[' + key2 + '][true]';
        let obj = {};
        obj[final_key] = 'x';
        result.push(obj);
      } else if (item == false) {
        final_key = key + '[' + value.value + ']' + '[' + key2 + '][false]';
        let obj = {};
        obj[final_key] = 'x';
        result.push(obj);
      }
    });
  });

  return result;
};
export default {
  compile
};
