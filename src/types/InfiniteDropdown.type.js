const compile = item => {
  const key = item.fieldId;
  const value = JSON.parse(item.payload).params.value.label.th;
  let result = {};
  result[key] = value;
  //console.log(result);
  return result;
};
export default {
  compile
};
