import Positions from '../../config/position.json';
import _ from 'lodash';
const compile = item => {
  const key = item.fieldId;
  const values = JSON.parse(item.payload).params.value;

  const result = _.chain(values)
    .map((value, index) => {
      return _.keys(value).map(subkey => {
        const rawKey = `${key}[${index}].${subkey}`;
        let rawValue = _.get(value, subkey);
        let _value = _.isObject(rawValue)
          ? _.get(rawValue, ['label', 'th'])
          : rawValue;
        let checkBoolean = _.isBoolean(_value);
        if (checkBoolean) {
          _value === checkBoolean ? (_value = 'มี') : (_value = 'ไม่มี');
        }
        return {
          [rawKey]: _value
        };
      });
    })
    .flatten()
    .map(item =>
      _.chain(item)
        .omitBy((value, key) => {
          return (
            _.endsWith(key, '].slideId') ||
            _.endsWith(key, '].label') ||
            _.endsWith(key, '].index') ||
            _.endsWith(key, '].detail1')
          );
        })
        .value()
    )
    .reject(_.isEmpty)
    .value();

  //console.log(result);
  return result;
};
export default {
  compile
};
