import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Rating = () => {
    const rating = {
        1: 5,
        2: 10,
        3: 40,
        4: 12,
        5: 51
    }
    const countRating = () => {


    }
    const percentage = 1;
    return (
        <div style={{ width: 150, height: 150 }}>
            <CircularProgressbar
                text={`${percentage}`}
                maxValue={5}
                value={percentage}
                styles={buildStyles({
                    pathColor: `#F9CF3D`,
                    textColor: '#F9CF3D',
                    trailColor: '#f0f0f0',
                    textSize: '35px'
                })}


            />;
        </div>
    );
};

export default Rating;