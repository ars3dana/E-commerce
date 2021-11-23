import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useActions } from '../../hooks/actions';
import { useTypedSelector } from '../../hooks/typesSelector';
import { wrapper } from '../../redux/store';
import styles from '../../styles/products/GoodProducts.module.scss';
import HotProductCard from './HotProductCard';

const GoodProducts: NextPage = () => {
    const { products, error, loading } = useTypedSelector(state => state.product)
    const { fetchProduct } = useActions()
    useEffect(() => {
        fetchProduct(null, null, null)
    }, [])

    if (loading) {
        return <h1>Выгружаем Склад...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    const hotProducts = products.filter(e => e.hot)
    return (
        <div className={styles.container}>
            {hotProducts.map((product, index) => (
                //@ts-ignore              
                <HotProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default GoodProducts;
