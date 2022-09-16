// Feito por Eduardo Pontes
import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./globals";
import BotaoTop from "./BotaoTop";
import Typewriter from "./Typewriter";

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
                        <a className="nav-link" href="#habilidades">Habilidades</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projetos">Projetos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contato">Contato</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redes</a>  
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="https://github.com/eduardolpsss" target="_blank" rel="noreferrer">Github</a>
                        <a className="dropdown-item" href="https://www.linkedin.com/in/eduardolpsss/" target="_blank" rel="noreferrer">Linkedin</a>
                        <div className="dropdown-divider">
                        </div>
                        <a className="dropdown-item" href="mailto:eduardo.pontes2801@gmail.com">Email me</a>
                        <a className="dropdown-item" href="https://api.whatsapp.com/send?phone=5561985019585&text=Olá%20Eduardo,%20">WhatsApp</a>
                        <div className="dropdown-divider">
                        </div>
                        <a className="dropdown-item" href="/docs/Eduardo-Luiz-Pontes-de-Souza.pdf" target="_blank" rel="noreferrer" title="Meu currículo">Meu currículo</a>
                        </div>
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
                  Sou estudante de Ciências da Computação na instituição de ensino superior Universidade Católica de Brasília - UCB (8º semestre), interesses relacionados ao desenvolvimento, noções de programação, front-end e back-end.
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
                  <h1>Habilidades</h1>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12">
                  <p>
                    Desenvolvi e sigo desenvolvendo habilidades referentes as seguintes linguagens e frameworks:
                  </p>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12 text-center">
                  <i className="fa-brands fa-js-square" title="JavaScript"></i>
                  <i className="fa-brands fa-node" title="Node"></i>
                  <i className="fa-brands fa-react" title="React"></i>
                  <i className="fa-brands fa-html5" title="HTML5"></i>
                  <i className="fa-brands fa-css3-alt" title="CSS3"></i>
                  <i className="fa-brands fa-java" title="Java"></i>
                  <i className="fa-brands fa-c" title="C"></i>
                  <i className="fa-solid fa-database" title="MySQL Relational Database Management System"></i>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12">
                <p>
                  Métodos de trabalho e atvididades desenvolvidas:
                </p>
                
                <ul>
                  <li>Métodos ágeis (sprints) com GitHub Projects, Jyra e Trello</li>
                  <li>Challenge Based Learning (CBL)</li>
                  <li>UX/UI com Figma</li>
                  <li>Desenvolvimento responsivo (mobile view)</li>
                  <li>Analise e projeto de softwares (documentação)</li>
                  <li>
                    Web - Javascript, Angular, React, Next, Vue, Node, HTML, CSS, jQuery, Bootstrap, Webpack, Gulp e MySQL.
                  </li>
                  <li>
                    Fundamentos Java - POO, Programação Funcional, MongoDB, Spring Boot, JavaFX, JPA e Hibernate.
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
                <h1>Projetos</h1>
              </div>
            </div>
            
            <div className="row">
              <div className="col-12">
                <p>
                  Os projetos que produzi e participei estão atualmente hospedados no meu GitHub.
                </p>
                <br/>
              </div>
            </div>
            
            <div className="row">
              <div className="col-12 text-center">
                <a href="https://github.com/eduardolpsss?tab=repositories" target="_blank" rel="noreferrer">
                  <button type="button" className="btn btn-dark">Ir para os meus repositórios</button>
                </a>
                <br/><br/>
              </div>
            </div>
          </div>
        </section>

        {/* Entre em contato comigo */}
        <section>
        <div className="container" id="contato">
          <hr/>
          <div className="row">
            <div className="col-md-8 col-12">
              <h1>Entre em contato comigo!</h1>
              <p>
                <i className="fa-solid fa-location-dot"></i> Brasília - DF/Brasil
              </p>
              <p>
                Sigo sempre aprendendo, você pode entrar em contato comigo pelas seguintes redes:
              </p>
              
              <div className="text-center">
                <a href="https://github.com/eduardolpsss" target="_blank" rel="noreferrer" title="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/eduardolpsss/" target="_blank" rel="noreferrer" title="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="mailto:eduardo.pontes2801@gmail.com" title="Entre em contato comigo por e-mail">
                  <i className="fa-brands fa-google"></i>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5561985019585&text=Olá%20Eduardo,%20" target="_blank" rel="noreferrer" title="Entre em contato comigo pelo WhatsApp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="/docs/Eduardo-Luiz-Pontes-de-Souza.pdf" target="_blank" rel="noreferrer" title="Meu currículo">
                  <i className="fa-solid fa-file"></i>
                </a>
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
                  Feito por Eduardo Pontes
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
