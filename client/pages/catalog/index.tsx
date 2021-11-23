import React from 'react';
import { useRouter } from 'next/router';
import CategoryItem from '../../components/category/CategoryItem';
import styles from '../../styles/catalog/Catalog.module.scss'
import AllProducts from '../../components/category/AllProducts';
import type { NextPage } from 'next';
const Catalog: NextPage = () => {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <CategoryItem />
            <div className={styles.body}>
                <AllProducts />
            </div>
        </div>
    );
};

export default Catalog;