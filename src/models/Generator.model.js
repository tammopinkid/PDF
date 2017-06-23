import Positions from '../../config/position.json'
import fs from 'fs'

const toJSONFile = (data)=>{
  fs.writeFile('./output/out.json', JSON.stringify(data,null,4), 'utf-8', function(err) {
    if (err){
      throw err
    }
    console.log('write json file successfully.')
  })
}

const generate = (dataObject) => {
  let results = []
  let result = {}
  let page = {}
  let current_page = 0
  Positions.forEach(position => {
    if (current_page !== position.p){
      results = []
      current_page = position.p
    }
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
    page[current_page] = results
  })
  //console.log(page)
  toJSONFile(page)
  //console.log(__dirname)
  //console.log(fs)
  return dataObject
}


export default {
  generate
}
