import React from "react";
import Repositories from "./components/Repositories";

export default function Projects() {
    return (
        <>
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

                    <div className="row mt-3">
                    <div className="col-12">
                        <p>
                        Here are details about some of my repositories on GitHub:
                        </p>
                        <br/>
                    </div>
                    </div>

                    {/* Cards dos Projetos */}
                    <Repositories/>
                    
                    <br/><br/>
                </div>
            </section>
        </>
    );
}