
const Projects = () => {
    return(
        <>
        <div className='projects'>
          <h3>Projects</h3>
          <div className='project'>
              <img src='img/project1.png' alt='project 1' />
              <div className='project-info'>
                <div className='project-title'>
                  Workintech
                </div>
                <p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                <div className='project-techs'>
                  <span>react</span>
                  <span>redux</span>
                  <span>vercel</span>
                </div>
                <div className='project-links'>
                  <a href='/#'>View Site</a>
                  <a href="/#">Github</a>
                </div>
              </div>
          </div>
          <div className='project'>
              <img src='img/project2.png' alt='project 2' />
              <div className='project-info'>
                <div className='project-title'>
                  Journey
                </div>
                <p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                <div className='project-techs'>
                  <span>react</span>
                  <span>redux</span>
                  <span>vercel</span>
                </div>
                <div className='project-links'>
                  <a href='/#'>View Site</a>
                  <a href="/#">Github</a>
                </div>
              </div>
          </div>
      </div>
        </>
    )
}

export default Projects;