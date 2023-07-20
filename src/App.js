import './styles/App.css';
import Header from './components/header/header';
import Skills from './components/Skills';
import Profile from './components/profile';
import Projects from './components/projects';
import Footer from './components/footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { LanguageContext } from './contexts/languageContext';
import { RotatingLines } from 'react-loader-spinner'
import { toast } from 'react-toastify';

function App() {
  // dil tercihine göre bilgileri tutar
  const [lang, setLang] = useState("");
  const [loading, setLoading] = useState(true);
  // mevcut dil.
  const currentLanguage = useSelector((store) => store.language);

  // dil değiştiğinde apiye istek atalım
  useEffect(() => {
    setTimeout(function () {
      console.log("tekrar axios")
      axios.get('http://localhost:9000/api/data/' + currentLanguage)
        .then(res => {
          setLang(res.data);
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
          toast("Servis hatası!!")
        });
    }, 100);
  }, [currentLanguage]);

  return (
    loading
      ?
      <RotatingLines
        className="loading"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="66"
        visible={true} />
      :
      <>
        <LanguageContext.Provider value={{ lang }}>
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
