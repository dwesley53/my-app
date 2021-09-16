import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './david.png';
import './class1.png';
import './class2.png';

class App extends Component {
 render() {

  return (

    <div className="Body">
    <body className="body-default" data-component="Body">

    <div className="Navbar">
    <nav className="navbar navbar-default" data-component="NavBar" />
        <div className="topnav" data-component="TopNav">
          <a href="#about">About me</a>
          <a href="#skills">My skills</a>
          <a href="#education">Education</a>
          <a href="#projects">My projects</a>          
          <a href="#contact">Contact me</a>
        </div>
        <div style={{"paddingLeft":"0px"}} />
        </div>
    
<div className="Main">
    <main className="Main-default" data-component="Main">
        <div className="about" style={{"font-size": "50px"}} data-component="About" id="about">
        <h2>About me</h2>
        </div>
        <h3 className="me" style={{"textAlign": "center"}}>My name is David Wesley. I am a firefighter, wrestling coach, and a self-taught front-end developer with a passion for service and personal development.</h3>
        <img className="fire_image" alt=""></img>
        </main>

        <div className="skills" id="skills">My Skills</div>
        <div className="content">
        <div className="horz-list">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>jQueary</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>
      
      <div className="education" data-component="Education" id="education">My Education</div>
          <div className="imageContainer">
            <img className="class1" alt=""/>
            <img className="class2" alt=""/>
            <img className="class3" alt=""/>
          </div>

          <div className="projects" date-component="projects" id="projects">My Projects</div>

          <div className="contact" date-component="contact" id="contact">Contact Me</div>
          <div className="container-default" id="contact">
            <div className="card">
              <i className="fas fa-envelope"><span>&#9993;</span></i>
              <h2 className="card-title">Email</h2>
              <p className="card-info">dmw3ca@gmail.com</p>
            </div>
            
            <div className="card">
              <i className="fas fa-phone"><span>&#9742;</span></i>
              <h2 className="card-title">Phone number</h2>
              <p className="card-info">540-894-6687</p>
            </div>
            </div>
             
 <div className="footer-default" data-component="Location" id="location">
  <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101655.2967199805!2d-80.4994948834559!3d37.23043092764051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d950adc06dcc3%3A0x86ceb8ea4842da2d!2sBlacksburg%2C%20VA!5e0!3m2!1sen!2sus!4v1630872885241!5m2!1sen!2sus" width="625" height="250" style={{"border":"0;"}} allowfullscreen="" loading="lazy" data-component="Location"></iframe>
  </div>
</div>
                
          </body>
    </div>
    
  );
}
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));







