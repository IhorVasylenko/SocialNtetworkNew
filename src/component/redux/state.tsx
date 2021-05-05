import React from "react";
import {v1} from "uuid";

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

const myState: RootStateType = {
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
        {id: v1(), onlineAuthor: false, authorName: 'Gleb',
            messageDate: newDate, messageStatus: 'load', lastMessageAuthorName: 'Gleb:',
            lastMessageText: 'It is a period of civil war. ',
            unViewedMessageCounter: 1, timePassed: 3, authorAvatar: null},
        {id: v1(), onlineAuthor: true, authorName: 'Marina',
            messageDate: newDate, messageStatus: 'notDelivery', lastMessageAuthorName: 'Marina:',
            lastMessageText: 'Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. ',
            unViewedMessageCounter: 10, timePassed: 101, authorAvatar: null},
        {id: v1(), onlineAuthor: false, authorName: 'Vlad',
            messageDate: newDate, messageStatus: 'delivery', lastMessageAuthorName: 'You:',
            lastMessageText: 'It is a dark time for the Rebellion. ',
            unViewedMessageCounter: 9, timePassed: 23, authorAvatar: null},
        {id: v1(), onlineAuthor: true, authorName: 'Iuliia',
            messageDate: newDate, messageStatus: 'seen', lastMessageAuthorName: 'You:',
            lastMessageText: 'Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. ',
            unViewedMessageCounter: null, timePassed: 24, authorAvatar: null},
        {id: v1(), onlineAuthor: null, authorName: 'Alina',
            messageDate: newDate, messageStatus: 'lookedOver', lastMessageAuthorName: 'Alina:',
            lastMessageText: 'It is a dark time for the Rebellion. ',
            unViewedMessageCounter: 115, timePassed: 25, authorAvatar: null}
    ]
}

export default myState


/*let x = {
    names: ['Gandalf Gray', 'Bilbo Buggins', 'Gollum', 'Aragon', 'Legolas'],
    text: 'Why is it that people who can\'t take advice always insist on giving it ?',
    media: <img src="https://www.guinnessworldrecords.com/Images/Deadpool%20article%20main_tcm25-19980.jpg" alt=""/>,

    PostData: [
        {
            id: 1,
            name: 'Mirime',
            avatar: '/avatar1.jpg',
            passed: 'a min ago',
            likesCount: 7,
            text: "A long time ago, in a galaxy far, far away... It is a period of civil war. Rebel spaceships," +
                "striking from a hidden base, have won their first victory against the evil Galactic Empire." +
                "During the battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon," +
                "the Death Star, an armored space station with enough power to destroy an entire planet." +
                "Pursued by the Empires sinister agents, Princess Leia races home aboard her starship," +
                "that can save her people and restore freedom to the galaxy....",
            media: <img
                src="https://i2.wp.com/metro.co.uk/wp-content/uploads/2020/05/mrb-eb33.jpg?quality=90&strip=all&zoom=1&resize=644%2C338&ssl=1"
                alt=""/>
        },
        {
            id: 2,
            name: 'Eru Thingol',
            avatar: '/avatar2.jpg',
            passed: 'an hour ago',
            likesCount: 11,
            text: "A long time ago, in a galaxy far, far away... It is a period of civil war. Rebel spaceships," +
                "striking from a hidden base, have won their first victory against the evil Galactic Empire." +
                "During the battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon," +
                "the Death Star, an armored space station with enough power to destroy an entire planet." +
                "Pursued by the Empires sinister agents, Princess Leia races home aboard her starship," +
                "that can save her people and restore freedom to the galaxy....",
            media: <img src="https://m.mrpickles.cn-fan.tv/images/characters.png" alt=""/>
        },
        {
            id: 3,
            name: 'Ancalime',
            avatar: '/avatar3.jpg',
            passed: '13 hour ago',
            likesCount: 29,
            text: "A long time ago, in a galaxy far, far away... It is a period of civil war. Rebel spaceships," +
                "striking from a hidden base, have won their first victory against the evil Galactic Empire." +
                "During the battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon," +
                "the Death Star, an armored space station with enough power to destroy an entire planet." +
                "Pursued by the Empires sinister agents, Princess Leia races home aboard her starship," +
                "that can save her people and restore freedom to the galaxy....",
            media: <img
                src="https://img.nbc.com/sites/nbcunbc/files/images/2019/4/02/Futurama-Web-DynamicLead-Desktop-1920x1080.jpg"
                alt=""/>
        }
    ],

    cntactMessagesData: [
        {
            id: 1,
            name: 'Mirime',
            avatar: '/avatar1.jpg',
            passed: 'a min ago',
            message: 'Do Not Be Afraid, Mithrandir. You Are Not Alone.'
        },
        {
            id: 2,
            name: 'Eru Thingol',
            avatar: '/avatar2.jpg',
            passed: 'an hour ago',
            message: 'The Power Of The Three Rings Has Ended. The Time Has Come ... For The Dominion Of Men.'
        },
        {id: 3, name: 'Ancalime', avatar: '/avatar3.jpg', passed: '13 hour ago', message: 'The World Is Changed.'},
        {
            id: 4,
            name: 'Yngve',
            avatar: '/avatar4.jpg',
            passed: 'Yesterday',
            message: 'But The Hearts Of Men Are Easily Corrupted.'
        },
        {
            id: 5,
            name: 'Lúthien Tinuviel',
            avatar: '/avatar5.jpg',
            passed: '2 days ago',
            message: 'The Quest Stands Upon The Edge Of A Knife.'
        },
        {
            id: 6,
            name: 'Mirime',
            avatar: '/avatar1.jpg',
            passed: 'a min ago',
            message: 'In Place Of A Dark Lord You Would Have A Queen!'
        },
        {
            id: 7,
            name: 'Eru Thingol',
            avatar: '/avatar2.jpg',
            passed: 'an hour ago',
            message: 'Even The Smallest Person Can Change The Course Of The Future.'
        },
        {
            id: 8,
            name: 'Ancalime',
            avatar: '/avatar3.jpg',
            passed: '13 hour ago',
            message: 'May It Be A Light For You In Dark Places, When All Other Lights Go Out.'
        },
        {
            id: 9,
            name: 'Yngve',
            avatar: '/avatar4.jpg',
            passed: 'Yesterday',
            message: 'Do We Leave Middle-Earth To Its Fate? Do We Let Them Stand Alone?'
        },
        {
            id: 10,
            name: 'Lúthien Tinuviel',
            avatar: '/avatar5.jpg',
            passed: '2 days ago',
            message: 'You Have No Power Here, Servant Of Morgoth! You Are Nameless! Faceless! Formless! Go Back To The\n' +
                '                    Void From Whence You Came!'
        }
    ]
}*/
