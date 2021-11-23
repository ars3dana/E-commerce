import React, { FC } from 'react';
import styles from '../../styles/products/GoodProductCard.module.scss'
import { Product } from '../../types/product';
import Link from 'next/link';
interface ProductsProps {
    product: Product[]
}
const HotProductCard: FC<ProductsProps> = ({ product }) => {

    return (
        <>
            <Link href={`/catalog/${product.id}`}>

                <div className={styles.container}>
                    <div className={styles.img}>
                        <img src={product.img} alt="" />
                    </div>
                    <div className={styles.title}>
                        {product.title}
                    </div>
                    <div className={styles.price}>
                        {product.price} $
                    </div>

                </div>
            </Link>
        </>
    );
};

export default HotProductCard;