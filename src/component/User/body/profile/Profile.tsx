import React from 'react';
import style from './Profile.module.css'
import iconFacebook from '../../../common/image/iconsNetworks/facebook.png'
import iconInstagram from '../../../common/image/iconsNetworks/instagram.png'
import iconPinterest from '../../../common/image/iconsNetworks/pinterest.png'
import iconLinkedin from '../../../common/image/iconsNetworks/linkedin.png'
import iconTwitter from '../../../common/image/iconsNetworks/twitter.png'
import iconYouTube from '../../../common/image/iconsNetworks/youtube.png'
import noAvatar from '../../../common/image/defoultIcons/noPhotoAvatar.png'

function Profile () {
    return (
        <div className={style.container}>
            <div className={style.control}>
                control
            </div>
            <div className={style.content}>
                <div className={style.wrapper}>
                    <div className={style.backgroundImage} style={
                        {backgroundImage: 'url(https://uapo.org.ua/wp-content/uploads/2019/07/year-end-ai.jpg)'}}>
                        <div className={style.profileMenu}>
                            <div className={style.avatarContainer}>
                                <img src={noAvatar} alt=""/>
                            </div>
                            <div className={style.placeHolders}>
                                <a href='#'>news</a>
                                <a href='#'>portfolio</a>
                                <a href='#'>album</a>
                                <a href='#'>frainds</a>
                            </div>
                            <button>unfollow</button>
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
                                    <a>
                                        <img src={iconFacebook} alt="iconFacebook"/>
                                        <p>https://uk-ua.facebook.com</p>
                                    </a>
                                    <a>
                                        <img src={iconInstagram} alt="iconInstagram"/>
                                        <p>https://instagram-my.ru/</p>
                                    </a>
                                    <a>
                                        <img src={iconPinterest} alt="iconPinterest"/>
                                        <p>https://www.pinterest.com/</p>
                                    </a>
                                    <a>
                                        <img src={iconLinkedin} alt="iconLinkedin"/>
                                        <p>https://linkedin.com/</p>
                                    </a>
                                    <a>
                                        <img src={iconTwitter} alt="iconTwitter"/>
                                        <p>https://twitter.com/</p>
                                    </a>
                                    <a>
                                        <img src={iconYouTube} alt="iconYouTube"/>
                                        <p>https://www.youtube.com/</p>
                                    </a>
                                </div>
                            </div>
                            <div className={style.profileDate}>
                                <span className={style.profileName}>Ihor Vasylenko</span>
                                <span className={style.country}>
                            <span>Ukraine</span>
                            <span>Kiev</span>
                        </span>
                                <span className={style.status}>
                            Hello my friends!
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile