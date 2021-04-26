import React from 'react';
import style from './Footer.module.css'
import logo from '../../common/image/logoImage/logoDarkPrimery0288D1.png'
import iconFacebook from '../../common/image/iconsNetworks/facebook.png'
import iconInstagram from '../../common/image/iconsNetworks/instagram.png'
import iconPinterest from '../../common/image/iconsNetworks/pinterest.png'
import iconLinkedin from '../../common/image/iconsNetworks/linkedin.png'
import iconTwitter from '../../common/image/iconsNetworks/twitter.png'
import iconYouTube from '../../common/image/iconsNetworks/youtube.png'
import iconCursor from '../../common/image/iconsContact/gps.png'
import iconEmail from '../../common/image/iconsContact/email.png'
import iconPhone from '../../common/image/iconsContact/phoneCall.png'
import { NavLink } from 'react-router-dom';

function Footer () {
    return (
        <div className={style.footer}>
            <div className={style.wrapper}>
                <div>
                    <NavLink to='' activeClassName={style.activeLink}>
                        <img className={style.logo} src={logo} alt="logo"/>
                    </NavLink>
                    <div className={style.icons}>
                        <NavLink to=""><img src={iconFacebook} alt="iconFacebook"/></NavLink>
                        <NavLink to=""><img src={iconInstagram} alt="iconInstagram"/></NavLink>
                        <NavLink to=""><img src={iconPinterest} alt="iconPinterest"/></NavLink>
                        <NavLink to=""><img src={iconLinkedin} alt="iconLinkedin"/></NavLink>
                        <NavLink to=""><img src={iconTwitter} alt="iconTwitter"/></NavLink>
                        <NavLink to=""><img src={iconYouTube} alt="iconYouTube"/></NavLink>
                    </div>
                </div>
                <div>
                    <ul>
                        <p>Features</p>
                        <li><NavLink to="">Pricing</NavLink></li>
                        <li><NavLink to="">Education</NavLink></li>
                        <li><NavLink to="">Refer a friend</NavLink></li>
                        <li><NavLink to="">Finder app</NavLink></li>
                        <li><NavLink to="">Updetes</NavLink></li>
                        <li><NavLink to="">Beta</NavLink></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>Company</p>
                        <li><NavLink to="">Design</NavLink></li>
                        <li><NavLink to="">Prototype</NavLink></li>
                        <li><NavLink to="">Collaborate</NavLink></li>
                        <li><NavLink to="">Sketch</NavLink></li>
                        <li><NavLink to="">Photoshop</NavLink></li>
                        <li><NavLink to="">Notepad</NavLink></li>
                        <li><NavLink to="">WEbStorm</NavLink></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>Get started</p>
                        <li><NavLink to="">Tuturials</NavLink></li>
                        <li><NavLink to="">Resources</NavLink></li>
                        <li><NavLink to="">Guides</NavLink></li>
                        <li><NavLink to="">Example</NavLink></li>
                        <li><NavLink to="">Help</NavLink></li>
                    </ul>
                </div>
                <div className={style.contacts}>
                    <ul>
                        <p>Contact Us</p>
                        <li>
                            <div>
                                <img src={iconCursor} alt="coordinate"/>
                                Kiev, Ukraine
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={iconEmail} alt="email"/>
                                myemail@haha.com
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={iconPhone} alt="phone"/>
                                +38 (077) 777 77 77
                            </div>
                        </li>
                    </ul>
                </div>  {/*contacts*/}
            </div>  {/*wrapper*/}
            <div className={style.copyright}>
                <p>Ihor Vassylenko © 2021 Everything will be great :)</p>
            </div>
        </div>  //footer
    )
}

export default Footer