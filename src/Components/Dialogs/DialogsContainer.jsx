import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text));
    };
    return (
        <Dialogs sendMessage={onSendMessageClick} updateNewMessageText={onNewMessageChange} dialogsPage={state}/>
    )
};

export default DialogsContainer;