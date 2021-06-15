import {v1} from "uuid";
import {MessagesPropsType} from "../../App";

type AddNewMessageType = ReturnType<typeof addNewMessageAC>;
export type AddNewMessagesActionType = AddNewMessageType;

export const myId: string = '116355'; // необходим для реализации логики, в дальнейшем получу с сервера
export const newDate: string = `${new Date().getHours()}:${new Date().getMinutes()}`; //временная заглушка для отображения даты

let initialState = [
    {
        id: v1(),
        authorId: '1',
        dateOffMessage: newDate,     //должно фиксироваться время отправки сообщения
        lastMessageText: 'It is a dark time for the Rebellion. ',
        statusOffMessage: "lookedOver",
        order: '',
        myId: myId,
    },
    {
        id: v1(),
        authorId: '116355',
        dateOffMessage: newDate,
        lastMessageText: 'It is a dark time for the Rebellion. ',
        statusOffMessage: "lookedOver",
        order: '',
        myId: myId,
    },
    {
        id: v1(),
        authorId: '1',
        dateOffMessage: newDate,
        lastMessageText: 'It is a dark time for the RebellionIt is a dark time for the RebellionIt is a dark time for the Rebellion. ',
        statusOffMessage: "lookedOver",
        order: 'last',
        myId: myId,
    },
    {
        id: v1(),
        authorId: '116355',
        dateOffMessage: newDate,
        lastMessageText: 'It is a dark time for the RebellionIt is a dark time for the RebellionIt is a dark time for the Rebellion. ',
        statusOffMessage: "lookedOver",
        order: 'last',
        myId: myId,
    },
] as MessagesPropsType[];
export type InitialMessagesStateType = typeof initialState;

export const messagesReducer = (state: InitialMessagesStateType = initialState, action: AddNewMessagesActionType): InitialMessagesStateType => {
    switch (action.type) {
        case 'ADD_NEW_MESSAGE':
            const newMessage: MessagesPropsType = {
                id: v1(),
                authorId: '116355',
                dateOffMessage: newDate,     //должно фиксироваться время отправки сообщения
                lastMessageText: action.text,
                statusOffMessage: "lookedOver",
                order: 'last',
                myId: myId,
            };
            state[state.length - 2].order = '' // костыль, убирает хвостик у предпоследнего сообщения
            return [...state, newMessage]
        default:
            return state
    }
}

export const addNewMessageAC = (text: string) => ({type: 'ADD_NEW_MESSAGE', text,})
