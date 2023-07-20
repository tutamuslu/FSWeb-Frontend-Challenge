import '../styles/header.css';
import { useSelector, useDispatch } from "react-redux";
import { changeViewMode, changeLang } from '../actions/actions';
import { LanguageContext } from '../Contexts/languageContext';
import { useContext } from 'react';
import HeaderSocial from './headerSocial';
import LightMode from './lightmode';
import DarkMode from './darkmode';

const Header = () => {

    const dispatch = useDispatch();
    const isDarkMode = useSelector((store) => store.isDarkMode);
    const currentLanguage = useSelector((store) => store.language);
    const { lang } = useContext(LanguageContext)

    const viewModeChange = () => {
        dispatch(changeViewMode());
    }

    const langChange = () => {
        let newLanguage = '';

        if(currentLanguage === 'en'){
            newLanguage = 'tr';
        }else{
            newLanguage = 'en';
        }

        dispatch(changeLang(newLanguage));
    }
    
    const headerLeftColor = isDarkMode ? '#171043' : '#4731d3';
    const headerRightColor = isDarkMode ? '#1A210B': '#cbf281';
    const langColor = isDarkMode ? '#BAB2E7': '#CAF181';
    const lang2Color = isDarkMode ? '#777': '#D9D9D9';

    return (
        <>
            <header>
                <div className='header-left' style={{"background-color": headerLeftColor}}>
                    <div className='language' onClick={langChange} style={{"color": langColor}}><a href='/#'>{lang.header.changeLang1}<span style={{"color": lang2Color}}>{lang.header.changeLang2}</span></a></div>
                    <div className='left-content'>
                        <div className='name'>{lang.header.name}</div>
                        <div className='job'>{lang.header.job}</div>
                        <div className='description'>{lang.header.description}</div>
                        <HeaderSocial />
                    </div>
                </div>
                <div className='header-img'></div>
                <div className='header-right' style={{"background-color": headerRightColor}}>
                   {
                    isDarkMode ?
                    <DarkMode change={viewModeChange} text={lang.header.lightMode}/>
                    :
                    <LightMode change={viewModeChange} text={lang.header.darkMode}/>
                   }
                </div>
            </header>
        </>
    )
}

export default Header;