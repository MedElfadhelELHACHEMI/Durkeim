# Durkeim
## Med elfadhel ELHACHEMI
### Postulat pour Projet de fin d'étude Dev Fullstack
## Résumé Objectif
L'objectif de ce projet était de permettre aux entrepreneurs, aux ingénieurs et à toute personne nécessaire à une start-up de se chercher et de se retrouver en utilisant des messages courts (Signaux), des Tags et des domaines d'expertise.
le code que je vais vous montrer est le composant pour créer de tels Messages (Signaux)
## Visuel
![alt text](durkeim/Durkeim signal creator.gif "Animation")

## Code
Techno utiliser: ReactJs,Redux,ImmutableJs,MaterialUI
Etapes:
  - l'utilisateur commence par nommer son message(Signal) 
  - Ecrit le contenu du message
  - le component vérifie si l'utilisateur a utilisé des Tags  déjà dans le système dans son message
  - l'utilisateur sélectionne les tags pour son message
  - l'utilisateur envoie le message

[HomePage Container](https://github.com/MedElfadhelELHACHEMI/durkeim/blob/master/app/containers/HomePage/index.js)
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
```
[HomePage Saga](https://github.com/MedElfadhelELHACHEMI/durkeim/blob/master/app/containers/HomePage/sagas.js)
```javascript
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
```
[HomePage Reducer](https://github.com/MedElfadhelELHACHEMI/durkeim/blob/master/app/containers/HomePage/reducer.js)
```javascript
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
    function homepageReducer(state = initialState, action) {
        switch (action.type) {
            case SIGNAL_TEXT_CHANGE:
                return state.setIn(['Signal', 'text'], action.text);
            case SIGNAL_TITLE_CHANGE:
                return state.setIn(['Signal', 'title'], action.title);
            case CREATING_SIGNAL_FOCUS:
                return state.setIn(['Signal', 'isCreating'], true);
            case CREATING_SIGNAL_BLUR:
                return state.setIn(['Signal', 'isCreating'], false);
            case SENDING_SIGNAL_PENDING:
                return state.setIn(['Signal', 'isSending'], true);
            case SENDING_SIGNAL_SUCCESSFUL:
                return state
                .setIn(['Signal', 'isSending'], false)
                .setIn(['Signal', 'isCreating'], false)
                .setIn(['Signal', 'isSettingTags'], false)
                .setIn(['Signal', 'title'], '')
                .setIn(['Signal', 'text'], '')
                .setIn(['Signal', 'tags'], []);
            case SIGNAL_ADD_TAGS:
                return state.updateIn(['Signal', 'tags'], (arr) => arr.concat(action.tags.filter((tag) => (arr.indexOf(tag) < 0))));
            case SIGNAL_ADD_TAG:
                return state
                .updateIn(['Signal', 'tags'], (arr) => arr.push(action.tag));
            case SETTING_TAGS:
                return state.setIn(['Signal', 'isSettingTags'], true);
            case GET_ALL_TAGS_SUCCESS:
                return state.set('generalTags', fromJS(action.tags));
            case GET_ALL_TAGS_FAILED:
                return state;
            default:
            return state;
        }
    }                                                       
  ```
  ```javascript
  //Container Component
  {tags.map((value, key) => this.renderChip(value, key))}
  renderChip(value, key) {return (<Chip key={key}>{value.value}</Chip>)}
  
  //Signal Creation JSx
  ...
    <ListItem disabled>
        <TextField
        hintText="Give your signal a title"
        fullWidth
        onChange={onSignalTitleChange}
        value={title}
        />
        <DraftEditor
        signalText={text}
        onSignalCreationblur={onSignalCreationblur}
        onSignalCreationfocus={onSignalCreationfocus}
        onSignalTextChange={onSignalTextChange}
        />
    </ListItem>
    ...
    //Draft Editor Component
    ...
    render() {
    return (
      <div onClick={this.focus} style={styles.editor}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
          onFocus={this.props.onSignalCreationfocus}
          onBlur={this.props.onSignalCreationblur}
        />
        <EmojiSuggestions />
      </div>
    );
  }
  
  //Signal Actions
    function changeSignalText(text) {
        return {
            type: SIGNAL_TEXT_CHANGE,
            text,
        };
    }
    
    function creatingSignalFocus() {
        return {
            type: CREATING_SIGNAL_FOCUS,
        };
    }
    function creatingSignalBlur() {
        return {
            type: CREATING_SIGNAL_BLUR,
        };
    }
  
  //Sagas
  
    function* watchTags() {
        const watcher = yield takeLatest(SIGNAL_TEXT_CHANGE, addTags);
        yield take(LOCATION_CHANGE);
        yield cancel(watcher);
    }
    //Check if Message text has Tags in it
    function* addTags(action) {
        const tags = yield select(makeSelectTags());
        const Input = action.text.toLowerCase().split(/\s+/);
        const currentTags = [];
        if(tags){
            tags.map((tag) => {
                const current = tag.get('value').toLowerCase();
                if (Input.indexOf(current) !== -1 && currentTags.indexOf(current) === -1) {
                currentTags.push(tag);
                }
            });
        }
        if (currentTags.length > 0) {
        yield put(SignalActions.addTags(currentTags));
        }
    }
    
    //Sending Saga Action
    function sendingSignal() {
        return {
            type: SENDING_SIGNAL,
        };
    }
    function sendingSignalPending() {
        return {
            type: SENDING_SIGNAL_PENDING,
        };
    }
    function sendingSignalSuccessful(data) {
        return {
            type: SENDING_SIGNAL_SUCCESSFUL,
            data,
        };
    }
    function sendingSignalFailed(error) {
        return {
            type: SENDING_SIGNAL_FAILED,
            error,
        };
    }
    
    //Send Signal Saga
    function* watchSignal() {
        const watcher = yield takeLatest(SENDING_SIGNAL, SendSignalAsync);
        // Suspend execution until location changes
        yield take(LOCATION_CHANGE);
        yield cancel(watcher);
    }
    
    function* SendSignalAsync() {
        const Signal = yield select(makeSelectSignalObject());
        const { tags, text, title } = Signal.toJS();
        const outSignal = { tags, text, title };
        try {
            yield put(SignalActions.sendingSignalPending());
            const response = yield call(axios.post, 'https://api-adress.com/api/signals', outSignal);
            yield put(SignalActions.sendingSignalSuccessful(response.data));
        } catch (e) {
            yield put(SignalActions.sendingSignalFailed(e));
        }
    }
```

## Explication des Choix
- **Redux, Redux-saga**
    - pourquoi pas gérer la State des components en local au lieu de Redux:
        >redux me permet un grand niveau de controle (Granuleux) et me facilite le debogage.

    - Pourqoui Redux-Saga et pas Redux-Thunk ou autre
        >Parcequ'une saga peut être arrêté,forker, une saga c'est plus facile à écrire,tester et honnêtement, j'aime utiliser de nouvelles technologies comme les Generator functions
        
    - Pourquoi axios et pas fetch
        >les deux sont presque similaires mais axios me permet de definir les HTTP headers par défault, error handling et ne plus utiliser JSON.stringify() ou res.json()

