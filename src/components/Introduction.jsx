import React from "react";
import Typewriter from "./Typewriter";

export default function Introduction() {
    return (
        <>
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
                        Graduated in Computer Science from Universidade Católica de Brasília (UCB), experience in client-side and server-side development, frameworks and databases. Active, always looking for the best way to handle and premeditate possible problems. I participate easily in teamwork, communicative, technical, agile and helpful.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}