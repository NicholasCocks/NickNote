import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as hollowStar } from '@fortawesome/free-regular-svg-icons';

export function ToStarButton() {
    return ( 
        <FontAwesomeIcon icon={hollowStar}/>
    )
}

export function UnstarButton() {
    return ( 
        <FontAwesomeIcon icon={faStar} />
     )
}