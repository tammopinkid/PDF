import Positions from '../../config/position.json'
import _ from 'lodash'
const compile = (item) => {
  const key = item.fieldId
  const values = JSON.parse(item.payload).params.value
  let result = []
  let formatOutput = 'x'
  _.map(Positions, position => {
    if (key === position.key.substr(0, _.indexOf(position.key, '['))){
      formatOutput = position.outputType
    }
  })
  _.map(values, (value, index) => {
    let final_key = key+'['+index+']'
    let obj = {}
    if (value.checked){
      obj[final_key] = formatOutput
      result.push(obj)
    } else {
      obj[final_key] = ''
      result.push(obj)
    }
  })
  return result
}
export default{
  compile
}
