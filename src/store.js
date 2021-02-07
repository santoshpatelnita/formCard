import {createStore} from 'redux'
import rootRuducer from './reducer'

// const initialState = {
//     formData: formState,
//   };

const store = createStore(rootRuducer)

export default store