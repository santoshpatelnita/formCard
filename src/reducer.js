export const initialState = {
    form_data:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    
    switch (type) {
          
        case 'FORM_DATA':
            console.log(initialState.form_data)
            return {
                ...state,
                form_data: payload
            }
            

        default:
            return state
    }
}
