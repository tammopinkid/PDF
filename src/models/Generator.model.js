import Positions from '../../config/position.json'
import fs from 'fs'

/*const toJSONFile = (data)=>{
  fs.writeFile('../../output/out.json', data, 'utf-8', function(err) {
    if (err){
      throw err
    }
    console.log('write json file successfully.')
  })
}*/

const generate = (dataObject) => {
  let results = []
  let result = {}
  Positions.forEach(position => {
    dataObject.forEach(data => {
      result = {}
      if (position.key === Object.keys(data)[0]){
        result.text = data[Object.keys(data)]
        result.x = position.x
        result.y = position.y
        result.optlist = 'abcd'
        results.push(result)
      }
    })
  })
  //toJSONFile(results)
  //console.log(results)
  console.log(fs)
  return dataObject
}


export default {
  generate
}
