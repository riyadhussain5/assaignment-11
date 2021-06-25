import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import {  faFaucet, faGlobeAmericas,faFan,faTools} from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Garden Watering System',
        description: "BEST OVERALL: king do way Drip Irrigation Garden Watering System. BEST VALUE: PATHONOR Drip Irrigation Kit. HONORABLE MENTION: Orbit Micro Bubbler Drip Irrigation Watering Kit.",
        icon: faFaucet,
        background: " primary"
    },
    {
        title: 'Preparing Landscape',
        description: "BEST OVERALL: king do way Drip Irrigation Garden Watering System. BEST VALUE: PATHONOR Drip Irrigation Kit. HONORABLE MENTION: Orbit Micro Bubbler Drip Irrigation Watering Kit.",
        icon: faGlobeAmericas,
        background: " primary"
    },
    {
        title: 'Garden Fence',
        description: "BEST OVERALL: king do way Drip Irrigation Garden Watering System. BEST VALUE: PATHONOR Drip Irrigation Kit. HONORABLE MENTION: Orbit Micro Bubbler Drip Irrigation Watering Kit.",
        icon: faFan,
        background: " primary"
    },
    {
        title: 'Garden Supply',
        description: "BEST OVERALL: king do way Drip Irrigation Garden Watering System. BEST VALUE: PATHONOR Drip Irrigation Kit. HONORABLE MENTION: Orbit Micro Bubbler Drip Irrigation Watering Kit.", 
        icon: faTools,
        background: " primary"
    }
]

const Benifits = () => {
    return (
        <section>
            <h1 className="text-center text-sm-start text-md-start text-lg-start text-xl-start"> What we Offer</h1>
            <p className="text-center text-sm-start text-md-start text-lg-start text-xl-start">Listed Below Four Reason to choose us</p>
            <div className='row'>
            {
                infosData.map(info=> <InfoCard info={info}></InfoCard>)
            }
            </div>
            
            
        </section>
        
    );
};

export default Benifits;