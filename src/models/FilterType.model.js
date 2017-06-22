import Textbox from '../types/Textbox.type'
import Generator from './Generator.model'
const filter = (jsonObject) => {
  let events = jsonObject.events
  let data = []
  if (events.length > 0){
    events.forEach( item => {
      const key = item.fieldId
      const componentType = JSON.parse(item.payload).params.componentType
      switch (componentType){
        case 'Textbox':{
          data.push(Textbox.compile(item))
          break
        }
      }
    })
  }
  //console.log(data)
  Generator.generate(data)
}
export default{
  filter
}
