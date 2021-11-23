import styles from '../../styles/Carousel.module.scss';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel className={styles.container}>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://images.wbstatic.net/bners1/big_collection_1411_02.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://images.wbstatic.net/bners1/big_hits_1411.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;