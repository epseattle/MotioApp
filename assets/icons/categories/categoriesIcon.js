import React from 'react';

import Creativity from './creativity.svg';
import Diet from './diet.svg';
import Exercise from './exercise.svg';
import Finance from './finance.svg';
import Health from './health.svg';
import Learning from './learning.svg';
import Lifestyle from './lifestyle.svg';
import Selfcare from './selfcare.svg';

const CategoriesIcon = (props) => {
    const category = props.category.toLowerCase();

    return (
        <>
            {
                {
                    'creativity': <Creativity width={'100%'} height={'100%'} />,
                    'diet': <Diet width={'100%'} height={'100%'} />,
                    'exercise': <Exercise width={'100%'} height={'100%'} />,
                    'finance': <Finance width={'100%'} height={'100%'} />,
                    'health': <Health width={'100%'} height={'100%'} />,
                    'learning': <Learning width={'100%'} height={'100%'} />,
                    'lifestyle': <Lifestyle width={'100%'} height={'100%'} />,
                    'selfcare': <Selfcare width={'100%'} height={'100%'} />
                }[category]
            }
        </>
    );
}

export default CategoriesIcon;