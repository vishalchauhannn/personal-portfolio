import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/restaurantwebsiteimage.png'
import IMG2 from '../../assets/IMG2.png'


const data =[
  {
    id: 1,
    image: IMG1,
    title: 'Restaurant Website Clone',
    github: 'https://github.com/vishalchauhannn/Restaurant-website-clone',
    demo: 'https://restaurantwebsiteclone.netlify.app/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Personal Portfolio',
    github: 'https://github.com/vishalchauhannn/personal-portfolio',
    demo: ''
  }
  
]

const Portfolio = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHUB</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          }) 
        }
      </div>
    </section>
  )
}

export default Portfolio