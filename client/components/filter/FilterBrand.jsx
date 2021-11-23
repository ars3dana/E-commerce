import React, { useState } from 'react';
import styles from '../../styles/filter/Filter.module.scss'

const FilterBrand = ({ brand }) => {
    const [check, setCheck] = useState('')

    return (
        <div className={styles.input__container}>
            <input type="checkbox" id={brand.title} />
            <label for={brand.title} data>{brand.title}</label>
        </div>
    );
};

export default FilterBrand;