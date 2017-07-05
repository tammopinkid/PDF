import Textbox from '../types/Textbox.type';
import Option from '../types/Option.type';
import Generator from './Generator.model';
import Checkbox from '../types/Checkbox.type';
import Yesnolist from '../types/Yesnolist.type';
import InfiniteDropdown from '../types/InfiniteDropdown.type';
import Picker from '../types/Picker';
import { ignoreList } from '../../config/eventIgnore.json';
import _ from 'lodash';
//console.log(ignoreList);
const filter = jsonObject => {
  let events = jsonObject.events;
  let data = [];
  let i = 0;
  if (events.length > 0) {
    events.forEach(item => {
      const key = item.fieldId;
      const sequenceId = item.sequenceId;
      const componentType = JSON.parse(item.payload).params.componentType;
      //i++
      let isIgnore = false;
      _.map(ignoreList, item => {
        if (key === item) {
          isIgnore = true;
        }
      });
      if (isIgnore === false) {
        switch (componentType) {
          case 'Textbox': {
            data.push(Textbox.compile(item));
            break;
          }
          case 'Option': {
            if (Option.compile(item)) {
              data.push(Option.compile(item));
              //console.log('textbox = ', componentType);
            }
            break;
          }
          case 'Checkbox': {
            data.push(Checkbox.compile(item));
            break;
          }
          //case 'YesNoList': {
          //data.push(Yesnolist.compile(item))

          //break
          //}
          case 'InfiniteDropdown': {
            data.push(InfiniteDropdown.compile(item));
            break;
          }
          case 'Picker': {
            data.push(Picker.compile(item));
            break;
          }
        }
      }

      // if (sequenceId === 411) {
      //   console.log(item.payload);
      // }
    });
  }
  //console.log(data);
  //console.log('i = ',i)
  Generator.generate(data);
};
export default {
  filter
};
