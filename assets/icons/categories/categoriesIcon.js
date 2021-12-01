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
                    'creativity': <Creativity color={props.color} width={props.width} height={props.height} />,
                    'diet': <Diet color={props.color} width={props.width} height={props.height} />,
                    'exercise': <Exercise color={props.color} width={props.width} height={props.height} />,
                    'finance': <Finance color={props.color} width={props.width} height={props.height} />,
                    'health': <Health color={props.color} width={props.width} height={props.height} />,
                    'learning': <Learning color={props.color} width={props.width} height={props.height} />,
                    'lifestyle': <Lifestyle color={props.color} width={props.width} height={props.height} />,
                    'selfcare': <Selfcare color={props.color} width={props.width} height={props.height} />
                }[category]
            }
        </>
    );
}

export default CategoriesIcon;