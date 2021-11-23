import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/products/ProductCard';
import { useActions } from '../../../hooks/actions';
import { useTypedSelector } from '../../../hooks/typesSelector'
import styles from '../../../styles/category/CategoryItem.module.scss'

const Asortiment: NextPage = () => {
    const router = useRouter()
    const { products } = useTypedSelector(state => state.product)
    const [path, setPath] = useState([])
    const { fetchProduct } = useActions()
    useEffect(() => {
        fetchProduct(1, 10, path)
    }, [path])
    useEffect(() => {
        if (router?.query?.catalog) {
            let [data] = router.query.catalog
            setPath(data)
        }

    }, [router])

    return (
        <div className={styles.product__container}>
            {products && products.map((product, index) => (
                <ProductCard product={product} key={index} />
            ))}
        </div >
    );
};

export default Asortiment;