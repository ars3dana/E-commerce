import styles from '../../styles/category/CategoryItem.module.scss'
import Link from 'next/link';
import { FC } from 'react';

const CategoryItem: FC = () => {
    return (
        <div className={styles.container}>
            <Link href="/catalog/search/toy">
                <li className={styles.item}>Игрушки</li>
            </Link>
            <Link href="/catalog/search/clothe">
                <li className={styles.item}>Одежда</li>
            </Link>
            <Link href="/catalog/search/electronic">
                <li className={styles.item}>Элетроника</li>
            </Link>
            <Link href="/catalog/search/forhome">
                <li className={styles.item}>Для дома</li>
            </Link>
        </div>
    );
};

export default CategoryItem;