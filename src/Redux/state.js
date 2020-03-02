import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "lalala", likesCount: 23},
                {id: 2, message: "brrrr", likesCount: 15}
            ],
            newPostText: "Ввод текста"
        },
        dialogsPage: {
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
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};


export default store;