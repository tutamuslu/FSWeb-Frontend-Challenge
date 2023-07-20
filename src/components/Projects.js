import '../styles/projects.css';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/languageContext';

const Projects = () => {
  const { lang } = useContext(LanguageContext)
  const isDarkMode = useSelector((store) => store.isDarkMode);

  // koyu açık mod renk değişimleri
  const backgroundColor = isDarkMode ? '#1A210B' : '#CBF281';
  const h3Color = isDarkMode ? '#CBF281' : '#4731D3';
  const projectBackground = isDarkMode ? '#2B2727' : '#FFF';
  const projectTitleColor = isDarkMode ? '#C1BAED' : '#4338CA';
  const projectPColor = isDarkMode ? '#FFF' : '#383838';
  const techBackgroundColor = isDarkMode ? '#8173DA' : '#4731D3';
  const linkColor = isDarkMode ? '#CBF281' : '#120B39';

  return (
    <>
      <div className='projects' style={{ "backgroundColor": backgroundColor }}>
        <h3 style={{ "color": h3Color }}>{lang.projects.title}</h3>
        {
          lang.projects.projects.map(project => (
            <div className='project' style={{ "backgroundColor": projectBackground }}>
              <img src='img/project1.png' alt='project 1' />
              <div className='project-info'>
                <div className='project-title' style={{ "color": projectTitleColor }}>
                  {project.title}
                </div>
                <p style={{ "color": projectPColor }}>{project.description}</p>
                <div className='project-techs'>
                  {
                    project.techs.map(tech => (
                      <span style={{ "backgroundColor": techBackgroundColor }}>{tech}</span>
                    ))
                  }
                </div>
                <div className='project-links'>
                  <a href='/#' style={{ "color": linkColor }}>View Site</a>
                  <a href='/#' style={{ "color": linkColor }}>Github</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Projects;