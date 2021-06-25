import React from 'react';
import img14 from '../../image/midas-hofstra-a6PMA5JEmWE-unsplash.jpg';
import img15 from '../../image/christian-buehner-84E44EdD18o-unsplash.jpg';
import img16 from '../../image/sazzad-aryan-rjm8go9rL8Y-unsplash.jpg';
import img17 from '../../image/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg';
import BlogsData from '../BlogsData/BlogsData';


const BlogsPage = [
    {
        image: img14,
        name: 'Riyad Pathan',
        designation: 'Executive',
        title: 'Tree Plantation in Roof',
        description: 'Social proof can push customers who are on the fence about buying a product to make a purchase (or consider other alternatives). While there are many different​ ...',
    },
    {
        image: img15,
        name: 'Rahat Pathan',
        designation: 'Manager',
        title: 'Relation between soil and water',
        description: 'Social proof can push customers who are on the fence about buying a product to make a purchase (or consider other alternatives). While there are many different​ ...',
    },
    {
        image: img16,
        name:'Forhad Pathan',
        designation: 'Manager',
        title: 'Harvesting Hard',
        description: 'Social proof can push customers who are on the fence about buying a product to make a purchase (or consider other alternatives). While there are many different​ ...',
    },
    {
        image: img17,
        name: 'Rahim Pathan',
        designation: 'CEO',
        title: 'Water plantation System',
        description: 'Social proof can push customers who are on the fence about buying a product to make a purchase (or consider other alternatives). While there are many different​ ...'
    }
]

const Blogs = () => {
    return (
        <div className='text-center ' style={{backgroundColor: '#bba397'}}>
            <h1>This is Our Blogs</h1>
            <div className='d-flex justify-content-center ' >
                {
                    BlogsPage.map(blogs => <BlogsData blogs={blogs }></BlogsData>)
                }
            </div>
        </div>
    );
};

export default Blogs;