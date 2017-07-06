import Textbox from '../types/Textbox.type'
import Generator from './Generator.model'
import Checkbox from '../types/Checkbox.type'
import Yesnolist from '../types/Yesnolist.type'
import InfiniteDropdown from '../types/InfiniteDropdown.type'
const filter = (jsonObject) => {
  let events = jsonObject.events
  let data = []
    let data2 = []
  if (events.length > 0) {
    events.forEach(item => {
      const key = item.fieldId
      const componentType = JSON.parse(item.payload).params.componentType
      switch (componentType) {
        case 'Textbox': {
          data2.push(Textbox.compile(item))
          
          break
        }
        case 'Checkbox': {
          data2.push(Checkbox.compile(item))


          break
        }
        case 'YesNoList': {
        data.push(Yesnolist.compile(item))


        break
        }
        case 'InfiniteDropdown': {
          data2.push(InfiniteDropdown.compile(item))
          

          break
        }

      }
    })
  }
 
  
  Generator.generate(data)
}
export default {
  filter
}
