import Positions from '../../config/position.json';
import _ from 'lodash';

const compile = item => {
  const key = item.fieldId;
  const values = JSON.parse(item.payload).params.value;
  let result = [];
  let formatOutput = 'x';
  _.map(Positions, position => {
    if (key === position.key.substr(0, _.indexOf(position.key, '['))) {
      formatOutput = position.outputType;
    }
  });
  _.map(values, (value, index) => {
    let final_key = key + '[' + index + ']';
    let obj = {};
    if (value.checked) {
      obj[final_key] = formatOutput;
      result.push(obj);
    } else {
      obj[final_key] = '';
      result.push(obj);
    }
  });
  
  return result;
};
export default {
  compile
};
// //import _ from 'lodash'
// import Positions from '../../config/position.json';
// const compile = item => {
//   //console.log('**************************************');
//   const key = item.fieldId;
//   const payload = JSON.parse(item.payload);
//   // const yes = _.get(payload, 'params.value.yes');
//   // const no = _.get(payload, 'params.value.no');
//   //   const yes = JSON.parse(item.payload).params.value.yes
//   //   const no = JSON.parse(item.payload).params.value.no
//   const value = Object.keys(JSON.parse(item.payload).params.value);
//   const childrenValue = JSON.parse(item.payload).params.value;
//   let result = {};
//   value.forEach(item => {
//     //console.log(childrenValue[item].checked);
//     if (item) {
//       if (childrenValue[item].checked) {
//         Positions.forEach(position => {
//           if (position.outputType && position.key === key) {
//             // console.log(position.key)
//             // console.log(key+':'+position.outputType)
//             // console.log(' ')
//             if (position.outputType === 'x') {
//               result[key] = 'x';
//               //console.log(result);
//             }
//             if (position.outputType === 'text') {
//               result[key] = 'y';
//               //console.log(result);
//             }
//           }
//         });
//         //return result;
//       }
//       //   if (childrenValue[item].checked !== true && childrenValue[item].checked !== undefined) {
//       //     result[key] = childrenValue[item].checked
//       //     console.log(result)
//       //     // return null
//       //   }
//       // else {
//       //   return null
//       // }
//     }
//   });
//   //   console.log('i = ',i)
//   //   console.log('j = ',j)
//   //   if (no){
//   //     if (no.checked){
//   //       result[key] = 'y'
//   //       console.log(result)
//   //       //return result
//   //     }
//   //   }
//   result[key] = JSON.parse(item.payload).params.value;
//   //console.log(result);
//   //return result;
// };
// export default {
//   compile
// };
