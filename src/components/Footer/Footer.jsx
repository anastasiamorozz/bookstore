import React from 'react';
import './Footer.css';

import logo from '../../assets/icons/logo.svg';
import phone from '../../assets/icons/phone.svg';
import mail from '../../assets/icons/mail.svg';
import location from '../../assets/icons/location.svg';
import instagram from '../../assets/icons/insta.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import telegram from '../../assets/icons/telegram.svg';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <a><img src={logo} alt="Logo" /></a>
                    <p className='footer-rights'>©2024BookTime.com.All rights reserved.</p>
                </div>

                <div className="footer-links">
                    <div className="for-clients">
                        <ul>
                            <h2 className='text2'>Клієнтам</h2>
                            <li className="text4">Вхід до кабінету</li>
                            <li className="text4">Про нас</li>
                            <li className="text4">Доставка та оплата</li>
                            <li className="text4">Події</li>
                            <li className="text4">Блог</li>
                            <li className="text4">Видавництва</li>
                            <li className="text4">Відгуки</li>
                        </ul>
                    </div>

                    <div className="contacts">
                        <ul>
                            <h2 className='text2'>Контактна інформація</h2>
                            <li className="text4"><img src={phone} alt="Phone" /><p>0-800-333-563</p></li>
                            <li className="text4"><img src={mail} alt="Mail" /><p>BookTime@ukr.net</p></li>
                            <li className="text4"><img src={location} alt="Location" /><p>61051 м.Харків вул. Котельниківська 4</p></li>
                        </ul>
                    </div>

                    <div className="social">
                        <p className='text2'>Ми в соцмережах:</p>
                        <div className="social-links">
                            <img src={instagram} alt="Instagram" />
                            <img src={facebook} alt="Facebook" />
                            <img src={twitter} alt="Twitter" />
                            <img src={telegram} alt="Telegram" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;