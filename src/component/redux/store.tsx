import {combineReducers, createStore} from 'redux';
import {messagesReducer} from "./messagesReducer";

const rootReducer = combineReducers({
   messages: messagesReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>



/*import * as React from "react";
import {v1} from "uuid";
import {addNewMessageAC, messagesReducer} from "./messagesReducer";

export const myId = '116355' // необходим для реализации логики, в дальнейшем получу с сервера
export const newDate = `${new Date().getHours()}:${new Date().getMinutes()}` //временная заглушка для отображения даты

export type MessageStatusType = 'load' | 'notDelivery' | 'delivery' | 'seen' | 'lookedOver' | undefined  //на основании этого значения отображаеться картинка статуса сообщения
export type OrderMessageType = 'last' | '' //этот тип будет добавляться последнему сообщению 'last' и менять его у предидущих на ''
export type HamburgerMenuPropsType = {
    id: string
    menuPositions: Array<MenuPositionType>
}
export type MenuPositionType = {
    id: string
    title: string
    active?: boolean
    path: string
}  //отображение позиций в меню диалогов через hamburgerMenu
export type DialogItemPropsType = {
    id: string
    onlineAuthor: boolean | null
    authorName: string
    messageDate: string
    messageStatus: MessageStatusType
    lastMessageAuthorName: string
    lastMessageText: string
    unViewedMessageCounter: number | null
    timePassed: number
    authorAvatar: string | null
}
export type MessagesPropsType = {
    authorId?: string                      //этот тип не нужен при передаче пропсов в подкомпоненты сообщений, как можно заменить ?
    id: string
    statusOffMessage?: MessageStatusType    //этот тип не нужен при передаче пропсов в подкомпоненты сообщений, как можно заменить ?
    lastMessageText: string
    order: OrderMessageType
    dateOffMessage: string
    myId?: string
}
export type RootStateType = {
    messagesData: Array<MessagesPropsType>
    positionsData: Array<MenuPositionType>
    dialogsData: Array<DialogItemPropsType>
}
export type StoreType = {
    myState: RootStateType
    renderTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof addNewMessageAC> // |

export const store: StoreType = {
    myState: {
        messagesData: [
            {
                id: v1(),
                authorId: '1',
                dateOffMessage: newDate,     //должно фиксироваться время отправки сообщения
                lastMessageText: 'It is a dark time for the Rebellion. ',
                statusOffMessage: "lookedOver",
                order: '',
                myId: myId
            },
            {
                id: v1(),
                authorId: '116355',
                dateOffMessage: newDate,
                lastMessageText: 'It is a dark time for the Rebellion. ',
                statusOffMessage: "lookedOver",
                order: '',
                myId: myId
            },
            {
                id: v1(),
                authorId: '1',
                dateOffMessage: newDate,
                lastMessageText: 'It is a dark time for the RebellionIt is a dark time for the RebellionIt is a dark time for the Rebellion. ',
                statusOffMessage: "lookedOver",
                order: 'last',
                myId: myId
            },
            {
                id: v1(),
                authorId: '116355',
                dateOffMessage: newDate,
                lastMessageText: 'It is a dark time for the RebellionIt is a dark time for the RebellionIt is a dark time for the Rebellion. ',
                statusOffMessage: "lookedOver",
                order: 'last',
                myId: myId
            }
        ],
        positionsData: [
            {id: v1(), title: 'first', active: false, path: '/profile'},
            {id: v1(), title: 'second', active: false, path: '/profile'},
            {id: v1(), title: 'third', active: false, path: '/profile'},
            {id: v1(), title: 'fourth', active: false, path: '/profile'},
            {id: v1(), title: 'fifth', active: false, path: '/profile'}
        ],
        dialogsData: [
            {
                id: v1(), onlineAuthor: false, authorName: 'Gleb',
                messageDate: newDate, messageStatus: 'load', lastMessageAuthorName: 'Gleb:',
                lastMessageText: 'It is a period of civil war. ',
                unViewedMessageCounter: 1, timePassed: 3, authorAvatar: null
            },
            {
                id: v1(), onlineAuthor: true, authorName: 'Marina',
                messageDate: newDate, messageStatus: 'notDelivery', lastMessageAuthorName: 'Marina:',
                lastMessageText: 'Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. ',
                unViewedMessageCounter: 10, timePassed: 101, authorAvatar: null
            },
            {
                id: v1(), onlineAuthor: false, authorName: 'Vlad',
                messageDate: newDate, messageStatus: 'delivery', lastMessageAuthorName: 'You:',
                lastMessageText: 'It is a dark time for the Rebellion. ',
                unViewedMessageCounter: 9, timePassed: 23, authorAvatar: null
            },
            {
                id: v1(), onlineAuthor: true, authorName: 'Iuliia',
                messageDate: newDate, messageStatus: 'seen', lastMessageAuthorName: 'You:',
                lastMessageText: 'Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. ',
                unViewedMessageCounter: null, timePassed: 24, authorAvatar: null
            },
            {
                id: v1(), onlineAuthor: null, authorName: 'Alina',
                messageDate: newDate, messageStatus: 'lookedOver', lastMessageAuthorName: 'Alina:',
                lastMessageText: 'It is a dark time for the Rebellion. ',
                unViewedMessageCounter: 115, timePassed: 25, authorAvatar: null
            }
        ]
    },
    renderTree () {},
    subscribe (observer) {
        this.renderTree = observer
    },
    getState () {
        return this.myState
    },
    dispatch (action) {
        this.myState.messagesData = messagesReducer(this.myState.messagesData, action)
    }
}*/

