import '../styles/skills.css';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { LanguageContext } from '../Contexts/languageContext';

const Skills = () => {
  const { lang } = useContext(LanguageContext)
  const isDarkMode = useSelector((store) => store.isDarkMode);

  const backgroundColor = isDarkMode ? '#252128' : '#FFF';
  const h3Color = isDarkMode ? '#CBF281' : '#4832D3';
  const skillPColor = isDarkMode ? '#FFF' : '#6e6e6e';

  const skills1 = [
    {
      logo: 'img/javascript.png',
      title: "JavaScript"
    },
    {
      logo: 'img/react.png',
      title: "React"
    },
    {
      logo: 'img/redux.png',
      title: "Redux"
    }];

    const skills2 = [{
      logo: 'img/node.png',
      title: "Node"
    },
    {
      logo: 'img/code.png',
      title: "VS Code"
    },
    {
      logo: 'img/figma.png',
      title: "Figma"
    },
  ]
    return (
        <>
        <section style={{"background-color": backgroundColor}}>
        <h3 style={{"color": h3Color}}>{lang.skills.title}</h3>
        <div className='skills'>
          {
            skills1.map(skill => (
              skill.title !== 'Redux' ?
              <div className='skill'>
                <img src={skill.logo} alt={skill.title} />
                <p style={{"color": skillPColor}}>{skill.title}</p>
              </div>
              :
                <div className='skill'>
                  <div className='redux'>
                    <img src={skill.logo} alt={skill.title} />
                  </div>
                  <p style={{"color": skillPColor}}>{skill.title}</p>
                </div>
            ))
          }
        </div>
        <div className='skills'>
          {
            skills2.map(skill => (
              <div className='skill'>
                <img src={skill.logo} alt={skill.title} />
                <p style={{"color": skillPColor}}>{skill.title}</p>
              </div>
            ))
          }
        </div>
      </section>
      </>
    )
}

export default Skills;