import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/actions';
import { useTypedSelector } from '../../hooks/typesSelector';
import styles from '../../styles/filter/Filter.module.scss'
import FilterBrand from './FilterBrand';
const Filter = () => {
    const [brand, setBrand] = useState('')
    // const { brands } = useTypedSelector(state => state.brand)
    const { fetchBrand } = useActions()

    return (
        <div className={styles.container}>

            <fieldset className={styles.brand}>
                {/* {brands.map((brand, index) => (
                    <FilterBrand brand={brand} key={index} />
                ))} */}
            </fieldset>
        </div>
    );
};

export default Filter;