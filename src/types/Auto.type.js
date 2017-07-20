import _ from 'lodash';
const compile = item => {
  const key = item.fieldId;
  let result = [];

  let value = '';

  value = JSON.parse(item.payload).params.value;
  if (key == 'agentId' || key == 'branchId' || key == 'idNo') {
    let number = value.split('');

    /*number.forEach(number => {
          obj[key+'']=value.split('')
    })*/
    _.map(number, (number, index) => {
      let obj = {};
      obj[key + '[' + index + ']'] = number;
      result.push(obj);
    });
  } else {
    let result = {};
    result[key] = value;
    //console.log(result)
  }

  return result;
};
export default {
  compile
};
