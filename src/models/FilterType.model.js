import _ from 'lodash';
import Generator from './Generator.model';
import Textbox from '../types/Textbox.type';
import Option from '../types/Option.type';
import Checkbox from '../types/Checkbox.type';
import Yesnolist from '../types/Yesnolist.type';
import InfiniteDropdown from '../types/InfiniteDropdown.type';
import CardList from '../types/CardList.type';
import Picker from '../types/Picker';
import { ignoreList } from '../../config/eventIgnore.json';
//console.log(ignoreList);
const filter = jsonObject => {
  let events = jsonObject.events;
  let data = [];
  if (events.length > 0) {
    events.forEach(item => {
      const key = item.fieldId;
      const sequenceId = item.sequenceId;
      const componentType = JSON.parse(item.payload).params.componentType;
      let isIgnore = false;
      _.map(ignoreList, item => {
        if (key === item) {
          isIgnore = true;
        }
      });
      if (isIgnore === false) {
        switch (componentType) {
          // case 'Textbox': {
          //   data.push(Textbox.compile(item));
          //   break;
          // }
          case 'Option': {
            if (Option.compile(item)) {
              data.push(Option.compile(item));
            }
            break;
          }
          // case 'Checkbox': {
          //   data.push(Checkbox.compile(item));
          //   break;
          // }
          // case 'YesNoList': {
          //   data.push(Yesnolist.compile(item));
          //   break;
          // }
          // case 'InfiniteDropdown': {
          //   data.push(InfiniteDropdown.compile(item));
          //   break;
          // }
          // case 'Picker': {
          //   data.push(Picker.compile(item));
          //   break;
          // }
          // case 'CardList': {
          //   data.push(CardList.compile(item));
          //   break;
          // }
          // case 'Auto': {
          //   data.push(CardList.compile(item));
          //   break;
          // }
        }
      }
    });
  }
  console.log(data);
  Generator.generate(data);
};
export default {
  filter
};
