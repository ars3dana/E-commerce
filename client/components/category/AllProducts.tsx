import React, { FC, useEffect } from 'react';
import styles from '../../styles/category/CategoryItem.module.scss'
import { useTypedSelector } from '../../hooks/typesSelector'
import ProductCard from '../products/ProductCard';
import { useActions } from '../../hooks/actions';

const AllProducts: FC = () => {
    const { products, error, loading } = useTypedSelector(state => state.product)
    const { fetchProduct } = useActions()
    useEffect(() => {
        fetchProduct(null, null, null)
    }, [])
    if (loading) {
        return (
            <h1>Загрузка товаров</h1>
        )
    }
    console.log(products)

    return (
        <div className={styles.product__container}>
            {products && products.map((product, index) => (
                <ProductCard product={product} key={index} />
            ))}
        </div >
    );
};

export default AllProducts;