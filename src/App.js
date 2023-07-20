import './styles/App.css';
import Header from './components/header';
import Skills from './components/Skills';
import Profile from './components/profile';
import Projects from './components/projects';
import Footer from './components/footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { LanguageContext } from './Contexts/languageContext';
import { RotatingLines } from 'react-loader-spinner'

function App() {
  // dil tercihine göre bilgileri tutar
  const [lang, setLang] = useState("");
  const [loading, setLoading] = useState(true);
  // mevcut dil.
  const currentLanguage = useSelector((store) => store.language);
  
  useEffect(() => {
    setTimeout(function() {
      console.log("tekrar axios")
      axios.get('http://localhost:9000/api/data/' + currentLanguage)
      .then(res => {
        setLang(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
    }, 111);

  }, [currentLanguage]);

  return (
    loading
    ?
    <div className='loading'>
      <RotatingLines
      className="loading"
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="66"
      visible={true}
      />
    </div>
:
    <>
     <LanguageContext.Provider value={{lang}}>
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
     </LanguageContext.Provider>
    </>
  );
}

export default App;
