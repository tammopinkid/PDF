const compile = (item) => {
  const key = item.fieldId
  let value = ''
  if (JSON.parse(item.payload).params.value === false) {
    value = ''
  }
  else {
    value = 'x'
  }

  let result = {}
  result[key] = value
  return result


}
export default {
  compile
}
