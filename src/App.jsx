import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./globals";
import BotaoTop from "./components/BotaoTop";
import Introduction from "./components/Introduction";
import ProfessionalExperiences from "./components/ProfessionalExperiences";
import Projects from "./Projects";
import ContactInformation from "./components/ContactInformation";
import Abilities from "./components/Abilities";

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

        {/* Navbar responsivo */}
        <div className='Navbar shadow-sm p-3 mb-5 rounded'>
            <nav className="navbar navbar-expand-lg navbar">
                <a className="navbar-brand" href=""><img className="img-fluid" src="/images/menuIcon.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa-solid fa-align-justify"></i></button>
                    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#habilidades">Abilities</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#experiencias">Professional experiences</a>
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
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My resume</a>  
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/docs/cv-eduardo-luiz-pontes-de-souza.pdf" target="_blank" rel="noreferrer">pt-BR</a>
                      </div>
                    </li>
                  </ul>

                  {/* <!-- theme switcher  --> */}
                  <div className="toggle">
                    <div className="text-right">
                      <input id="switch" type="checkbox" name="switch-theme" onClick={toggleTheme}/>
                      <label htmlFor="switch"></label>
                    </div>
                  </div> 
                  <br/>  

                </div>
            </nav>  
        </div> 

        {/* Introdução */}
        <Introduction/>       
        
        {/* Habilidades */}
        <Abilities/>

        {/* Experiências profissionais */}
        <ProfessionalExperiences/>
        
        {/* Projetos */}
        <Projects/>

        {/* Entre em contato comigo */}
        <ContactInformation/>

        {/* Botão para voltar ao topo */}       
        <BotaoTop/>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
