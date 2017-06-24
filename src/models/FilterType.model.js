import Textbox from '../types/Textbox.type'
import Option from '../types/Option.type'
import Generator from './Generator.model'
const filter = (jsonObject) => {
  let events = jsonObject.events
  let data = []
  let i = 0
  if (events.length > 0){
    events.forEach( item => {
      const key = item.fieldId
      const sequenceId = item.sequenceId
      const componentType = JSON.parse(item.payload).params.componentType
      //i++
      switch (componentType){
        case 'Textbox':{
          data.push(Textbox.compile(item))
          break
        }
        case 'Option':{
          if (Option.compile(item)){
            data.push(Option.compile(item))
          }
          break
        }
      }
      // if (sequenceId === 411){
      //   console.log(item.payload)
      // }
    })
  }
  //console.log(data)
  //console.log('i = ',i)
  //Generator.generate(data)
}
export default{
  filter
}
