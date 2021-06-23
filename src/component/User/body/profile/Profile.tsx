import React from 'react';
import style from './Profile.module.css';
import iconFacebook from '../../../common/image/iconsNetworks/facebook.png';
import iconInstagram from '../../../common/image/iconsNetworks/instagram.png';
import iconPinterest from '../../../common/image/iconsNetworks/pinterest.png';
import iconLinkedin from '../../../common/image/iconsNetworks/linkedin.png';
import iconTwitter from '../../../common/image/iconsNetworks/twitter.png';
import iconYouTube from '../../../common/image/iconsNetworks/youtube.png';
import noAvatar from '../../../common/image/defoultIcons/noPhotoAvatar.png';
import {PreLoader} from "../../../common/preLoader/preLoader";
import {follow, unfollow} from "../../../redux/usersPageReducer";


type PhotosType = {
    large: string | null
    small: string | null
}
type ContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    contacts: ContactType
    fullName: string
}
export type ProfilePropsType = {
    profile: ProfileType
    followed: boolean
};


export const Profile = React.memo((props: ProfilePropsType) => {

    // задаем фоновое изображение общего контейнера
    const backgroundImage  = props.profile.photos.large !== null
        ? `url(${props.profile.photos.large})` :
        `url(https://uapo.org.ua/wp-content/uploads/2019/07/year-end-ai.jpg)`;

    if (!props.profile) {
        return <PreLoader />
    }

    return (
        <div className={style.container}>
            <div className={style.control}>
                control
            </div>
            <div className={style.content}>
                <div className={style.wrapper}>
                    <div className={style.backgroundImage} style={{backgroundImage: backgroundImage}}>
                        <div className={style.profileMenu}>
                            <div className={style.avatarContainer}>
                                <img src={
                                    props.profile.photos.small != null
                                        ? props.profile.photos.small
                                        : noAvatar} alt=""
                                />
                            </div>
                            <div className={style.placeHolders}>
                                <a href='none'>news</a>
                                <a href='none'>portfolio</a>
                                <a href='none'>album</a>
                                <a href='none'>friends</a>
                            </div>
                            {
                                props.profile.userId === 12825 ? <div></div> : props.followed
                                    ? <button onClick={() => {follow(props.profile.userId);}}>Unfollow</button>
                                    : <button onClick={() => {unfollow(props.profile.userId);}}>Follow</button>
                            }
                        </div>
                        <div className={style.footer}>
                            <div className={style.preferencesDate}>
                                <div className={style.followerDate}>
                                    <div className={style.followerItem}>
                                        <span>following</span>
                                        <span className={style.value}>33</span>
                                    </div>
                                    <div className={style.followerItem}>
                                        <span>followers</span>
                                        <span className={style.value}>77</span>
                                    </div>
                                </div>
                                <div className={style.socialsDate}>
                                    <SocialContact contact={props.profile.contacts.facebook}
                                                   address={'https://uk-ua.facebook.com'} image={iconFacebook} />
                                    <SocialContact contact={props.profile.contacts.instagram}
                                                   address={'https://instagram-my.ru/'} image={iconInstagram} />
                                    <SocialContact contact={props.profile.contacts.website}
                                                   address={'https://www.pinterest.com/'} image={iconPinterest} />
                                    <SocialContact contact={props.profile.contacts.mainLink}
                                                   address={'https://linkedin.com/'} image={iconLinkedin} />
                                    <SocialContact contact={props.profile.contacts.twitter}
                                                   address={'https://twitter.com/'} image={iconTwitter} />
                                    <SocialContact contact={props.profile.contacts.youtube}
                                                   address={'https://www.youtube.com/'} image={iconYouTube} />
                                </div>
                            </div>
                            <div className={style.profileDate}>
                                <span className={style.profileName}>
                                    {
                                    props.profile.fullName != null
                                        ? props.profile.fullName
                                        : 'noname'
                                    }
                                </span>
                                <span className={style.country}>
                                    <span>Ukraine</span>
                                    <span>Kiev</span>
                                </span>
                                <span className={style.status}>
                                    {/*<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>*/}
                                    Hello my friends!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});


type SocialContactPropsType = {
    contact: string
    address: string
    image: string
};
const SocialContact = (props: SocialContactPropsType) => {
    return (
        <a href={props.contact != null && props.contact !== '' ? props.contact : props.address}>
            <img src={props.image} alt="icon"/>
            <p>{props.contact != null && props.contact !== '' ? props.contact : props.address}</p>
        </a>
    )
};
