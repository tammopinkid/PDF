import Filter from './models/FilterType.model'
import events from '../test/event-from-app.json'
const data = Filter.filter(events)
console.log(data)
//console.log(Event)