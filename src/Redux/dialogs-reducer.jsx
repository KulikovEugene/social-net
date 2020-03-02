const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText;
            return state;
        case 'SEND-MESSAGE':
            let text = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 6, message: text});
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;
