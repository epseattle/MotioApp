import React from 'react';
import { View } from 'react-native';

import Blue1 from './blue1.svg'
import Blue2 from './blue2.svg'
import Blue3 from './blue3.svg'
import Pink1 from './pink1.svg'
import Pink2 from './pink2.svg'
import Pink3 from './pink3.svg'
import Pink4 from './pink4.svg'

const ProfileIcon = (props) => {
    const profile = props.profile

    return (
        <>
            {
                {
                    'blue1': <Blue1 width={'100%'} height={'100%'} />,
                    'blue2': <Blue2 width={'100%'} height={'100%'} />,
                    'blue3': <Blue3 width={'100%'} height={'100%'} />,
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