    import React from 'react'
    import './home.css'
  import {Link} from 'react-scroll'


    export const Home = () => {
    
      return (
        
        <div>
          <div className='topcontant'>
              <div className='topcontant__contrainer'>
                  <h1>Am Leathers</h1>
                  <p>We are running Am Leather from 2021 and working on various models of products 
                  and work with many job works with multiple companies and we looking forward to excited projects 
                and we are have lot expercens person to make your ideas in your hands and we have decent working space in hot city of chennai 
                its helps to make your order fast in your hand and we are all working like family and our design technical head have 28 years of exprecens in leather field to give ultimate qulity of your products.</p>
                  <a href='https://www.google.com/maps/dir//spilbox' target="_blank" rel="noreferrer">
                      <button className='topcontant__downloadButton'>
                          Our location
                      </button>
                  </a>
                  <Link to="Products" smooth={true} duration={500}>
                      <button className='topcontant__workButton'>My work</button>
                  </Link>


              </div>

          </div>
        </div>
        
      )
    }
