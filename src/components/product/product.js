import React from 'react'
import img1 from '../../assest/img1.jpg'
import img2 from '../../assest/img2.jpg'
import img3 from '../../assest/img3.jpg'
import img4 from '../../assest/img4.jpg'
import img5 from '../../assest/img5.jpg'
import img6 from '../../assest/img6.jpg'
import img7 from '../../assest/img7.jpg'
import img8 from '../../assest/img8.png'
import { Element } from 'react-scroll'
import { ProductCard } from '../productsdetails'
import './styles.css'

export const Products = () => {
  const Projects =[{
    img: img1
  },{
    img: img2
  },{
    img: img3
  },{
    img: img4
  },{
    img: img5
  },{
    img: img6
  },{
    img: img7
  },{
    img: img8
  }]
  return (
    <Element name="Products" className='projectContainer'>
       <h1>Products</h1>
            <p> This Products are design and made it our self</p>
  
    <div className='projectContainer__projects'>

        {
            Projects.map((project, index) => {
                return (< ProductCard key={index}
                    img={project.img}
                    />)
            })
        }

    </div>
</Element>
  )
}
