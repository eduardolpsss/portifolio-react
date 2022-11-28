// Feito por Eduardo Pontes
import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./globals";
import BotaoTop from "./BotaoTop";
import Typewriter from "./Typewriter";
import Repositories from "./Repositories";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalTheme />

        <div className='Navbar'>
            <nav className="navbar navbar-expand-lg navbar">
                <a className="navbar-brand" href=""><img className="img-fluid" src="/images/menuIcon.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa-solid fa-align-justify"></i></button>
                    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#habilidades">Abilities</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projetos">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contato">Contact information</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Networks</a>  
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="https://github.com/eduardolpsss" target="_blank" rel="noreferrer">Github</a>
                          <a className="dropdown-item" href="https://www.linkedin.com/in/eduardolpsss/" target="_blank" rel="noreferrer">Linkedin</a>
                          <div className="dropdown-divider">
                          </div>
                          <a className="dropdown-item" href="mailto:eduardo.pontes2801@gmail.com">Email me</a>
                          <a className="dropdown-item" href="https://api.whatsapp.com/send?phone=5561985019585&text=Olá%20Eduardo,%20">WhatsApp</a>
                        </div>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/docs/Eduardo-Luiz-Pontes-de-Souza.pdf" target="_blank" rel="noreferrer"><b>My resume</b></a>
                    </li>
                  </ul>

                  {/* <!-- theme switcher  --> */}
                  <div className="toggle">
                    <div className="text-right">
                      <i className="fa-solid fa-lightbulb"></i>
                      <input id="switch" type="checkbox" name="switch-theme" onClick={toggleTheme}/>
                      <label htmlFor="switch"></label>
                    </div>
                  </div> 
                  <br/>  

                </div>
            </nav>  
        </div> 
        
        {/* Introdução */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-flex">
                <Typewriter/>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <p>
                Computer science student at the higher education institution Catholic University of Brasília (8th semester), programming notions in both front-end and back-end development. I define myself as an active person who aims to anticipate problems, needs or future changes. I can easily participate in teamwork helping to solve problems, I am communicative, agile and helpful.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-12 text-center">
                <img className="img-fluid" src="/images/3bbed2c7-7f0a-497a-aa0b-57652d31cafd.png" alt="" width={355}/>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section id="habilidades">
          <div className="container">
              <hr/>
              <div className="row">
                <div className="col-12 text-center">
                  <h1>Abilities</h1>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12">
                  <p>
                    I have developed and continue to develop skills in the following languages and frameworks:
                  </p>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12 text-center">
                  <i className="fa-brands fa-js-square" title="JavaScript"></i>
                  <i className="fa-brands fa-node" title="Node.js"></i>
                  <i className="fa-brands fa-java" title="Java"></i>
                  <i className="fa-brands fa-react" title="React.js"></i>
                  <i className="fa-brands fa-vuejs" title="VUE.js"></i>
                  <i className="fa-brands fa-html5" title="HTML5"></i>
                  <i className="fa-brands fa-css3-alt" title="CSS3"></i>
                  <i className="fa-brands fa-php" title="PHP"></i>
                  <i className="fa-brands fa-c" title="C"></i>
                  <i className="fa-solid fa-database" title="MySQL Relational Database Management System"></i>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12">
                <p>
                  Working methods and developed activities:
                </p>
                
                <ul>
                  <li>Agile methods (sprints) with GitHub Projects, Jyra and Trello;</li>
                  <li>Challenge Based Learning (CBL);</li>
                  <li>UX/UI with Figma;</li>
                  <li>Responsive development (mobile view);</li>
                  <li>Software analysis and design (documentation);</li>
                  <li>
                    Web - Javascript, Angular, React.js, Next, Vue.js, Node.js, HTML, CSS, jQuery, Bootstrap, Webpack, Gulp and MySQL;
                  </li>
                  <li>
                    Java fundamentals - POO, Functional Programming, MongoDB, Spring Boot, JavaFX, JPA and Hibernate.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projetos */}
        <section id="projetos">
          <div className="container">
            <hr/>
            
            <div className="row">
              <div className="col-12 text-center">
                <h1>Projects</h1>
              </div>
            </div>
            
            <div className="row">
              <div className="col-12">
                <p>
                  The projects I have produced and participated in are currently hosted on my GitHub (some repositories are currently private).
                </p>
                <br/>
              </div>
            </div>
            
            <div className="row">
              <div className="col-12 text-center">
                <a href="https://github.com/eduardolpsss?tab=repositories" target="_blank" rel="noreferrer">
                  <button type="button" className="btn btn-dark">Go to my repositories</button>
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <p>
                  Here are details about some of my repositories on GitHub:
                </p>
                <br/>
              </div>
            </div>

            <Repositories/>
            
            <br/><br/>
          </div>
        </section>

        {/* Experiências profissionais */}
      <section>
        <div className="container" id="experiencias">
          <hr/>
          
          <div className="row">
            <div className="col-12 text-center">
              <h1>Professional experiences</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <p>
                <b>WEB/CODIM | CENTRAL BANK OF BRAZIL | MAR OF 2021 - CURRENT</b>
              </p>
            </div>
          </div>

          <div className="row">
            <ul>
              <li>
                Member of the web development team;
              </li>
              <li>
                Maintenance, content updates and code corrections on the site pages and on the SharePoint corporate intranet of the Central Bank of Brazil;
              </li>
              <li>
                Migration with the IT Department of old structures to the new format;
              </li>
              <li>
                Publishing of documents and other files on the pages;
              </li>
              <li>
                Other activities related to the course.
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-12">
              <p>
                <b>DEVELOPMENT OF THE SYSTEM OF REGISTRATION AND MANAGEMENT OF EXTENSION PROJECTS OF THE CATHOLIC UNIVERSITY OF BRASÍLIA | JAN 2022 - CURRENT</b>
              </p>
            </div>
          </div>

          <div className="row">
            <ul>
              <li>
                Acting and coordinating the front-end developed with React (Matrial-UI), we used Axios to help with the REST API part of the project. Project developed with the help of agile methods (Scrum on GitHub Projects and Challenge Based Learning), the web application was developed to improve and automate the entire existing structure, which involves teachers, students and foreigners in the process of administration, registration and participation in the university's extension projects (repositorie currently private).
              </li>
            </ul>
          </div>
        </div>
      </section>


        {/* Entre em contato comigo */}
        <section>
          <div className="container" id="contato">
            <hr/>
            <div className="row">
              <div className="col-12 text-center">
                <h1>Contact information and resume</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 col-12">
                <p>
                  <i className="fa-solid fa-location-dot"></i> Brasília - DF/Brasil
                </p>
                <p>
                  I am always learning, you can get in touch with me through the following networks:
                </p>

                
                <div className="text-center">
                  <a href="https://github.com/eduardolpsss" target="_blank" rel="noreferrer" title="GitHub">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/eduardolpsss/" target="_blank" rel="noreferrer" title="LinkedIn">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="mailto:eduardo.pontes2801@gmail.com" title="Send me an e-mail">
                    <i className="fa-brands fa-google"></i>
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=5561985019585&text=Olá%20Eduardo,%20%20" target="_blank" rel="noreferrer" title="Get in touch with me through WhatsApp">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="/docs/Eduardo-Luiz-Pontes-de-Souza.pdf" target="_blank" rel="noreferrer" title="My Resume"><i className="fa-solid fa-file"></i></a>
                </div>
              </div>
                  
              {/* Imagem de perfil */}
              <div className="col-md-4 col-12 text-center mt-md-0 mt-2">
                <img className="img-fluid float-center imagem-perfil" src="/images/86f21215-633f-4e41-ab5c-2a1f0118572a.png" alt="" width={255}/>
              </div>
            </div>
            <hr/>
          </div>
        </section>

        <div className="Footer" >    
          <footer className="text-center">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <p>
                    Made by Eduardo Pontes
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <BotaoTop/>

      </Fragment>
    </ThemeProvider>
  );
}

export default App;
