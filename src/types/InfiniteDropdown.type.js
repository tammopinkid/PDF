const compile = (item) => {

  const key = item.fieldId
  const value = JSON.parse(item.payload).params.value.value
  let result = {}
  result[key] = value
  
  return result
}

export default {
  compile
};
