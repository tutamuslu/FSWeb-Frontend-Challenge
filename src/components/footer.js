import '../styles/footer.css';
import { useSelector } from 'react-redux';
import SocialIcons from './socialIcons';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/languageContext';

const Footer = () => {
  const { lang } = useContext(LanguageContext)
  const isDarkMode = useSelector((store) => store.isDarkMode);

  const backgroundColor = isDarkMode ? '#252128' : '#FFF';
  const color = isDarkMode ? '#8F88FF' : '#4731D3';
  const pColor = isDarkMode ? '#FFF' : '#120B39';
  const iconColor = isDarkMode ? '#8F88FF' : '#4731D3';

  return (
    <>
      <div className='contact' style={{ "backgroundColor": backgroundColor }}>
        <h5 style={{ "color": color }}>{lang.footer.title}</h5>
        <p style={{ "color": pColor }}>{lang.footer.description}</p>
        <a href={lang.footer.title} style={{ "color": color }}>{lang.footer.mail}</a>
        <SocialIcons color={iconColor} />
      </div>
    </>
  )
}

export default Footer;