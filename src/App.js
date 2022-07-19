import './App.css';
import logo from './images/logo.svg';
import iconMenu from './images/icon-hamburger.svg';
import angleLeft from './images/icon-angle-left.svg'
import angleRigth from './images/icon-angle-right.svg'
import iconArrow from './images/icon-arrow.svg';
import imgAboutDark from './images/image-about-dark.jpg';
import imgAboutLight from './images/image-about-light.jpg';
function App() {
  return (
    <div className="App">
      {/* ---------------- header */}
      <header>
        <nav>
          <img src={iconMenu} className="iconMenu" />
          <a href="">
            <img src={logo} />
          </a>
        </nav>
        <div className='btns'>
          <button>
            <img src={angleLeft} />
          </button>            
          <button>
            <img src={angleRigth} /> 
          </button>
        </div>
      </header>
      <main>
        <h1>Discover innovative ways to de decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style 
          for proerty owners across the country.
          Our experts combine farm and function in 
          bringing your vision to life. Create a room
          in your own style with our collection and make 
          your property a reflection of you and what you love.
        </p>

        <button>
          shop now 
          <img src={iconArrow} />
        </button>
      </main>

      <img src={imgAboutDark} id="imgAboutDark" />

      <section className='about'>

        <h2>about our furniture</h2>

        <p>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem 
          Ipsum has been the industry's standard dummy 
          text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled 
          it to make a type specimen book. It has survived 
          not only five centuries, but also the leap 
          into electronic typesetting, remaining 
          essentially unchanged. It was popularised in the 
          1960s with the release.
        </p>
      </section>

      <img src={imgAboutLight} id="imgAboutLight" />
    </div>
  );
}

export default App;
