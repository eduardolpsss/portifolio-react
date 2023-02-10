import React from "react";

export default function ContactInformation() {
    return (
        <>
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
                        I'm always learning, you can get in touch with me through the following networks:
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
                        <a href="/docs/cv-eduardo-luiz-pontes-de-souza.pdf" target="_blank" rel="noreferrer" title="My Resume"><i className="fa-solid fa-file"></i></a>
                        </div>
                    </div>
                        
                    {/* Imagem de perfil */}
                    <div className="col-md-4 col-12 text-center mt-md-0 mt-2">
                        <img className="img-fluid float-center imagem-perfil" src="/images/perfil.jpeg" alt="" width={255}/>
                    </div>
                    </div>
                    <hr/>
                </div>
            </section>
        </>
    );
}