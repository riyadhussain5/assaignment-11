import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({info}) => {
    return (
        <div className='col-md-3 text-center text-sm-start text-md-start text-lg-start text-xl-start '>
            <div>
                <FontAwesomeIcon  icon={info.icon
                }></FontAwesomeIcon>
               <h6>{info.title}</h6>
               <small>{info.description}</small>
            </div>
        </div>
    );
};

export default InfoCard;