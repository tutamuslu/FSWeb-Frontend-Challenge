import '../styles/profile.css';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { LanguageContext } from '../Contexts/languageContext';

const Profile = () => {
  const { lang } = useContext(LanguageContext)
  const isDarkMode = useSelector((store) => store.isDarkMode);

  const backgroundColor = isDarkMode ? '#171043' : '#4731d3';
  return (
    <>
      <div className='profile' style={{ "backgroundColor": backgroundColor }}>
        <h3>{lang.profile.title}</h3>
        <div className='profile-detail'>
          <div className='detail'>
            <h4>{lang.profile.info}</h4>
            <div className='row'>
              <div className='row-title'>{lang.profile.birthdate}</div>
              <div className='row-content'>{lang.profile.birthdateVal}</div>
            </div>
            <div className='row'>
              <div className='row-title'>{lang.profile.city}</div>
              <div className='row-content'>{lang.profile.cityVal}</div>
            </div>
            <div className='row'>
              <div className='row-title'>{lang.profile.education}</div>
              <div className='row-content'>{lang.profile.educationVal}</div>
            </div>
            <div className='row'>
              <div className='row-title'>{lang.profile.status}</div>
              <div className='row-content'>{lang.profile.statusVal}</div>
            </div>
            <div className='row'>
              <div className='row-title'>{lang.profile.position}</div>
              <div className='row-content'>{lang.profile.positionVal}</div>
            </div>
          </div>
          <div className='detail'>
            <div className='detail-img'></div>
          </div>
          <div className='detail'>
            <h4>{lang.profile.about}</h4>
            <p>{lang.profile.aboutVal1}</p>
            <p>{lang.profile.aboutVal2}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;