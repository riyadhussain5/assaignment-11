import React from 'react';
import Member from '../Member/Member';
import img4 from '../../image/joel-wyncott-Zk5twxfWw_o-unsplash.jpg';
import img5 from '../../image/fernando-cferdo-kyjUvRNAgoE-unsplash.jpg';
import img6 from '../../image/silviu-beniamin-tofan-XJPaZWeKqbA-unsplash.jpg';
import img7 from '../../image/max-titov-uROPtIb7Vig-unsplash.jpg';

const TeamMember=[
    {
        Name: 'Rahim Pathan',
        image: img4,
        
        Number: 8801789918991
    },
    {
        Name: 'Riyad Pathan',
        image: img5,
      
        Number: 8801789918991
    },
    {
        Name: 'Forhad Pathan',
        image: img6,
      
        Number: 8801789918991
    },
    {
        Name: 'Rahat Pathan',
        image:img7,
       
        Number: 8801789918991
    }
]

const Team = () => {
    return (
        <div className='text-center'>
            <h1>Our Team Member</h1><br/>
            <p>Listed below our awesome team member</p>
            <div className='row '>
            {
                
               TeamMember.map(member => <Member member={member}></Member>) 
            }
            </div>
            
        </div>
    );
};

export default Team;