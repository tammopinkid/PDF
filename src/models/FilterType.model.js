import Textbox from '../types/Textbox.type'
import Generator from './Generator.model'
import Checkbox from '../types/Checkbox.type'
import Yesnolist from '../types/Yesnolist.type'
import InfiniteDropdown from '../types/InfiniteDropdown.type'
const filter = (jsonObject) => {
  let events = jsonObject.events
  let data = []
  if (events.length > 0) {
    events.forEach(item => {
      const key = item.fieldId
      const componentType = JSON.parse(item.payload).params.componentType
      switch (componentType) {
        case 'Textbox': {
          data.push(Textbox.compile(item))
          break
        }
        case 'Checkbox': {
          data.push(Checkbox.compile(item))


          break
        }
        //case 'YesNoList': {
        //data.push(Yesnolist.compile(item))


        //break
        //}
        case 'InfiniteDropdown': {
          data.push(InfiniteDropdown.compile(item))
          //console.log('asa')

          break
        }

      }
    })
  }
  //console.log(data)
  Generator.generate(data)
}
export default {
  filter
}
