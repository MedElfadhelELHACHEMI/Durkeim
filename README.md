# Durkeim
## Med elfadhel ELHACHEMI
### Postulat pour Projet de fin d'étude Dev Fullstack
## Résumé Objectif
L'objectif de ce projet était de permettre aux entrepreneurs, aux ingénieurs et à toute personne nécessaire à une start-up de se chercher et de se retrouver en utilisant des messages courts (Signaux), des Tags et des domaines d'expertise.
le code que je vais vous montrer est le composant pour créer de tels Messages (Signaux)
## Visuel
![alt text](
https://addons.cdn.mozilla.net/user-media/previews/full/180/180187.png?modified=1478820155 "Logo Title Text 1")

## Code
Techno utiliser: ReactJs,Redux,ImmutableJs,MaterialUI
Etapes:
  - the user starts by naming the message
  - writes the content of the message
  - the component checks if the user used tags already in the system inside his message
  - the user selects the tags for his message 
  - the user sends the message
```javascript
//we fetch the tags from the server using Sagas
componentWillMount() {
    this.props.onGetTags();
  }
  ...
  export function getAllTags() {
  return {
    type: GET_ALL_TAGS,
  };
}
  ...
  //Sagas
function* watchTagsInit() {
  const watcher = yield takeLatest(GET_ALL_TAGS, getAllTagsAsync);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

function* getAllTagsAsync() {
  try {
    const response = yield call(axios.get, 'https://api-adress.com/api/tags');
    yield put(SignalActions.getAllTagsSuccess(response.data));
  } catch (e) {
    yield put(SignalActions.getAllTagsFailed(e));
  }
}
//Reducer
const initialState = fromJS({
  generalTags: [],
  Signal: {
    title: '',
    text: '',
    isCreating: false,
    isSettingTags: false,
    isSending: false,
    tags: [],
  },
});
... Reducer
    case GET_ALL_TAGS_SUCCESS:
      return state.set('generalTags', fromJS(action.tags));
    case GET_ALL_TAGS_FAILED:
      return state;
      
  //Container Component
  {tags.map((value, key) => this.renderChip(value, key))}
  renderChip(value, key) {return (<Chip key={key}>{value.value}</Chip>)}
  
  //Signal Creation
  
```

