import _ from 'lodash'
const compile = (item) => {
  const key = item.fieldId
  const values = JSON.parse(item.payload).params.value
  let result = []
  _.map(values, (value, index) => {
    let final_key
    _.map(value.checked, (item, key2) => {
      final_key = key+'['+value.value+']'+'['+key2+']'
      let obj = {}
      obj[final_key] = item
      result.push(obj)
    })
  })
  //console.log(result)
  return result
}
export default{
  compile
}
