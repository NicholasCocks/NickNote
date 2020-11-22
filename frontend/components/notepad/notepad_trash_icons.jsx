import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTrashRestore } from '@fortawesome/free-solid-svg-icons';

export function MoveToTrashButton() {
    return ( 
        <FontAwesomeIcon icon={faTrash}/>
    )
}

export function MoveFromTrashButton() {
    return ( 
        <FontAwesomeIcon icon={faTrashRestore} />
     )
}