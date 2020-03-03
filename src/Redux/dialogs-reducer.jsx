const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Eugene"},
        {id: 3, name: "Anna"},
        {id: 4, name: "Mike"},
        {id: 5, name: "Andrey"}
    ],
    messages: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "Hi!"},
        {id: 3, message: "Buy!"},
        {id: 4, message: "Ok!"}
    ],
    newMessageText: ""
};
const dialogsReducer = (state = initialState, action) => {
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
