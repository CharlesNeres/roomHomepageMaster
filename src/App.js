import './App.css';
import logo from './images/logo.svg';
import iconMenu from './images/icon-hamburger.svg';
import angleLeft from './images/icon-angle-left.svg'
import angleRigth from './images/icon-angle-right.svg'
import iconArrow from './images/icon-arrow.svg';
import imgAboutDark from './images/image-about-dark.jpg';
import imgAboutLight from './images/image-about-light.jpg';
import img1 from './images/mobile-image-hero-1.jpg';
import img2 from './images/mobile-image-hero-2.jpg';
import img3 from './images/mobile-image-hero-3.jpg';
import React from "react";

class App extends React.Component{

  constructor(props){
    super(props);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.previustImg = this.previustImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.state = {
      count: 0,
      imgs: [img1, img2, img3]
    }
  }

  showMenu(e){
    const menu = document.querySelector("#menu");
    menu.style.transform = "translateX(0%)";
  }

  hideMenu(){
    const menu = document.querySelector("#menu");
    menu.style.transform = "translateX(-100%)";
  }

  previustImg(){
    this.setState({
      count: this.state.count == 0 ? 2 : this.state.count - 1
    })
  }

  nextImg(){
    this.setState({
      count: this.state.count == 2 ? 0 : this.state.count + 1
    })
  }

  render(){
    const myStyle = {
      backgroundImage: `url(${this.state.imgs[this.state.count]})`
    }
    return (
      <div className="App">
        {/* ---------------- header */}
        <header style={myStyle}>
          <div>
            <img src={iconMenu} onClick={this.showMenu} className="iconMenu" />
            <a href="">
              <img src={logo} />
            </a>
          </div>
          <div className='btns'>
            <button onClick={this.previustImg}>
              <img src={angleLeft} />
            </button>            
            <button onClick={this.nextImg}>
              <img src={angleRigth} /> 
            </button>
          </div>
        </header>
        <nav id="menu">
          <ul>
            <li onClick={this.hideMenu}>&#10006;</li>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>
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
    )
  }
    
  }

export default App;
