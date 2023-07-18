import './styles/App.css';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <div className='header-left'>
          <div className='language'>Türkçe'ye Geç</div>
          <div className='left-content'>
            <div className='name'>Almila</div>
            <div className='job'>I am a Frontend Developer...</div>
            <div className='description'>...who likes to craft solid and scalable frontend products with great user experiences.</div>
            <div className='social'>
              <div className='github'>Github</div>
              <div className='linkedin'>Linkedin</div>
            </div>
          </div>
        </div>
        {/* <div className='header-img'></div> */}
        <div className='header-right'>
          <div className='mode'>Dark Mode</div>
        </div>
      </header>
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
