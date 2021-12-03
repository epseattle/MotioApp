import React from 'react';
import { View } from 'react-native';

import Blue1 from './blue1.svg'
import Blue2 from './blue2.svg'
import Blue3 from './blue3.svg'
import Blue4 from './blue4.svg'
import Pink1 from './pink1.svg'
import Pink2 from './pink2.svg'
import Pink3 from './pink3.svg'
import Pink4 from './pink4.svg'

const profiles = [
    'blue1',
    'blue2',
    'blue3',
    'blue4',
    'pink1',
    'pink2',
    'pink3',
    'pink4',
]

const ProfileIcon = (props) => {
    var profile = props.profile
    if(props.random)
    {
        var index = Math.floor(Math.random() * profiles.length);
        profile = profiles[index]
    }

    return (
        <>
            {
                {
                    'blue1': <Blue1 width={'100%'} height={'100%'} />,
                    'blue2': <Blue2 width={'100%'} height={'100%'} />,
                    'blue3': <Blue3 width={'100%'} height={'100%'} />,
                    'blue4': <Blue4 width={'100%'} height={'100%'} />,
                    'pink1': <Pink1 width={'100%'} height={'100%'} />,
                    'pink2': <Pink2 width={'100%'} height={'100%'} />,
                    'pink3': <Pink3 width={'100%'} height={'100%'} />,
                    'pink4': <Pink4 width={'100%'} height={'100%'} />
                }[profile]
            }
        </>
    );
}

export default ProfileIcon;