import React, { FC } from 'react';
import Link from 'next/link'
import styles from '../../styles/navigation/Menu.module.scss';

interface Props {
    activ: boolean;
    set: Function;
    out: Function;
    user: object;
}
const Menu: FC<Props> = ({ activ, set, user, out }) => {

    return (
        <div className={!activ ? styles.menu : styles.menu_open}>
            <div onClick={() => set(false)} className={styles.menu_content}>
                <Link href={'/'}>
                    <div className={styles.menu_item}>
                        Главна
                    </div>
                </Link>
                <Link href={'/catalog'}>
                    <div className={styles.menu_item}>
                        Категории
                    </div>
                </Link>
                <Link href={'/cart'}>
                    <div className={styles.menu_item}>
                        Корзина
                    </div>
                </Link>
            </div>
            <div className={styles.auth}>
                {!user ? (
                    <>
                        <Link href={'/auth/registartion'}>
                            <div className={styles.menu_item}>
                                Регистрация
                            </div>
                        </Link>
                        <Link href={'/auth/login'}>
                            <div className={styles.menu_item}>
                                Войти
                            </div>
                        </Link>
                    </>
                ) : (
                    <div onClick={() => out()} className={styles.menu_item}>
                        Выйти
                    </div>

                )}

            </div>
        </div>
    );
};

export default Menu;