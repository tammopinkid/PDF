import events from '../test/Events-JaFLVAPz.json'
import Filter from './models/FilterType.model'
import _ from 'lodash'
import fs from 'fs'
const data = Filter.filter(events)
//console.log(Event)
// console.log(events)
// _.map(events.events, item => {
//   console.log(JSON.parse(item.payload))
// })
// fs.writeFile('./output/eiei.json', JSON.stringify(events,null,2), 'utf-8', function(err) {
//   if (err){
//     throw err
//   }
//   console.log('write json file successfully.')
// })
