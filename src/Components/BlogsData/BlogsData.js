import React from 'react';
import './BlogsData.css';

const BlogsData = ({blogs}) => {
    return (
        <div className='col-md-3 position-relative text-center text-sm-start text-md-start text-lg-start text-xl-start '>

        <div >
            <div >
                   <img className='rounded-circle  '  src={blogs.image}/>
            </div>
            <div>
                <h4>{blogs.name}</h4>
                <small>{blogs.designation}</small>
            </div>
            </div>

            <div>
           <h1><b>{blogs.title}</b></h1>
            </div>
            <div>
{blogs.description}
            </div>
            </div>
        
    );
};

export default BlogsData;