import Textbox from '../types/Textbox.type'
import Option from '../types/Option.type'
import Generator from './Generator.model'
import { ignoreEvent } from '../../config/eventIgnore.json'
import _ from 'lodash'
const filter = (jsonObject) => {
  let events = jsonObject.events
  let data = []
  if (events.length > 0 && typeof events === 'object'){
    events.forEach( item => {
      const key = item.fieldId
      const componentType = JSON.parse(item.payload).params.componentType
      //console.log(key)
      let isIgnore = false
      _.map(ignoreEvent, item => {
        if (key === item){
          isIgnore = true
        }
      })
      if (isIgnore === false){
        switch (componentType){
          case 'Textbox':{
            data.push(Textbox.compile(item))
            break
          }
          case 'Option':{
            data.push(Option.compile(item))
            break
          }
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
