import './App.css';
import logo from './images/logo.svg';
import iconMenu from './images/icon-hamburger.svg';
import angleLeft from './images/icon-angle-left.svg'
import angleRigth from './images/icon-angle-right.svg'
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
    </div>
  );
}

export default App;
