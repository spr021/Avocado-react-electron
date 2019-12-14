const initial = {
  name: '',
  profImg: '',
  massageList: [],
  convList: [],
  saveMassageList: [],
  massageOfList: [],
  lightMod: false,
  blurMod: false
}
const conversation = (state = initial, action) => {
  switch (action.type) {
    case 'NAME_TO_HEADER':
      return {
        ...state,
        name: action.name,
        profImg: action.profImg
      }
    case 'SEND_PM_TO_CHATBOX':
      return {
        ...state,
        massageList: [
          ...state.massageList,
          {
            pm: action.pm,
            id: 1
          }
        ]
      }
    case 'SAVE_CONV':
      return {
        ...state,
        convList: action.convList
      }
    case 'MASSAGE_LIST':
      return {
        ...state,
        saveMassageList: action.massageList
      }
    case 'LIST_OF_MASSAGE':
      return {
        ...state,
        massageOfList: action.massage
      }
    case 'CHANGE_LIGHT_MOD':
      return {
        ...state,
        lightMod: action.mod
      }
    case 'CHANGE_BLUR_MOD':
      return {
        ...state,
        blurMod: action.mod
      }
    default:
      return state
  }
}
export default conversation
