import React from 'react';

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
                    'blue1': <Blue1 width={props.width} height={props.height} />,
                    'blue2': <Blue2 width={props.width} height={props.height} />,
                    'blue3': <Blue3 width={props.width} height={props.height} />,
                    'pink1': <Pink1 width={props.width} height={props.height} />,
                    'pink2': <Pink2 width={props.width} height={props.height} />,
                    'pink3': <Pink3 width={props.width} height={props.height} />,
                    'pink4': <Pink4 width={props.width} height={props.height} />
                }[profile]
            }
        </>
    );
}

export default ProfileIcon;