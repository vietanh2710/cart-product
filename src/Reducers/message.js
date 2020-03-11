import * as Message from './../Constants/Message'
import * as types from './../Constants/ActionType'
var initialState = Message.MSG_WELCOME
const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE: return action.message
        default: return state
    }
}
export default message