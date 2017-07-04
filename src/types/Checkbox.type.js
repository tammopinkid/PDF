const compile = item => {
  const key = item.fieldId;
  let value = '';
  if (JSON.parse(item.payload).params.value === true) {
    value = 'x';
  } else {
    value = '';
  }

  let result = {};
  result[key] = value;
  //console.log(result);
  return result;
};
export default {
  compile
};
