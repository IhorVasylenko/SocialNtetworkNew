import {MessagesPropsType, myId, newDate} from "./store";
import {v1} from "uuid";
import {renderTree} from "../../index";


export const addNewMessageAC = (text: string) => {
    return {
        type: 'ADD_NEW_MESSAGE',
        text: text
    } as const
}

export const messagesReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_NEW_MESSAGE':
            const newMessage: MessagesPropsType = {
                id: v1(),
                authorId: '116355',
                dateOffMessage: newDate,     //должно фиксироваться время отправки сообщения
                lastMessageText: action.text,
                statusOffMessage: "lookedOver",
                order: 'last',
                myId: myId
            }
            state.push(newMessage)
            renderTree()
            state[state.length - 2].order = '' // костыль, убирает хвостик у предпоследнего сообщения
            return state

        default:
            return state
    }
}