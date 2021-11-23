import React, { FC } from 'react';
import styles from '../../styles/navigation/Footer.module.scss'
const Footer: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <ul>
                    <li>О сайте</li>
                    <li>Пользовательское соглашение</li>
                    <li>Поддержка</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className={styles.author}>
                <ul>
                    <li>Проект на Next.js</li>
                    <li>Технологии :</li>
                    <li>Redux, TypeScript, Sass</li>
                    <li>by Arsen</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;