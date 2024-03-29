// Feito por Eduardo Pontes
import {
  createGlobalStyle
} from "styled-components";

export default createGlobalStyle `
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html{
    font-family: 'Roboto', sans-serif;
  }

  html,
  body {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.body};
    transition: 0.2s;
  }

  p {
    color: ${({ theme }) => theme.paragrafo};
  }

  a {
    color: ${({ theme }) => theme.a};
  }

  a:hover {
    color: ${({ theme }) => theme.aHover};
  }

  hr {
    border-top: 1px solid;
    color: ${({ theme }) => theme.hr};
  }

  .container {
    transition: 0.2s;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    color: ${({ theme }) => theme.h1};
    transition: 0.2s;
  }

  h6 {
    color: ${({ theme }) => theme.paragrafo};
  }

  h1 {
    font-size: 28px;
  }

  .typewriter h1 {
    overflow: hidden;
    border-right: .15em solid ${({ theme }) => theme.h1};
    white-space: nowrap;
    margin: 0 auto;
    animation:
    typing 2.5s steps(40, end),
    blink-caret .75s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0
    }

    to {
      width: 100%
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {

    from,
    to {
      border-color: transparent
    }

    50% {
      border-color: ${({ theme }) => theme.h1};
    }
  }

  p {
    color: ${({ theme }) => theme.paragrafo};
    transition: 0.2s;
    grid-area: content;
    font-size: 1.1em;
    line-height: 1.8em;
    margin-top: 1em;
  }

  .paragrafoCard{
    color: ${({ theme }) => theme.paragrafoCard};
  }

  .backgroundCard{
    background-color: ${({ theme }) => theme.backgroundCard};
  }

  .card{
    min-height: 655px;
  }
  
  .fa-solid,
  .fa-location-dot {
    color: ${({ theme }) => theme.icone};
    font-size: 1em;
    cursor: pointer;
  }
  
  i {
    display: inline-block;
    color: var(--color-text);
    font-size: 2.5em;
    margin: 0 5px 10px;
    cursor: pointer;
  }
  
  .imagem-perfil {
    margin: 0 0 25px;
    border-radius: 50%;
  }
  
  .fa-circle-up {
    color: ${({ theme }) => theme.h1};
    font-size: 40px;
    cursor: pointer;
  }
  
  .back-to-top {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 99;
    background-color: ${({ theme }) => theme.body};
    border-radius: 50%;
  }

  .fa-github,
  .fa-linkedin,
  .fa-google,
  .fa-whatsapp,
  .fa-file {
    font-size: 35px;
    color: ${({ theme }) => theme.paragrafo};
    padding: 0.5em;
    transition: transform .2s;
  }

  .fa-github:hover,
  .fa-linkedin:hover,
  .fa-google:hover,
  .fa-whatsapp:hover,
  .fa-file:hover {
    transform: scale(1.5);
  }

  ul {
    color: ${({ theme }) => theme.paragrafo};
  }

  .Navbar {
    
  }

  .navbar-toggler {
    text-decoration: none;
    border: none;
  }

  .fa-align-justify {
    color: ${({ theme }) => theme.h1};
    text-decoration: none;
    border: none;
  }

  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 52px;
    height: 27px;
    background: grey;
    float: right;
    border-radius: 100px;
    position: relative;
  }
  
  label::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 90px;
    transition: 0.3s;
  }

  input:checked+label {
    background-color: ${({ theme }) => theme.h1};
  }

  input:checked+label::after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
  
  label:active:after {
    width: 45px;
  }

  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.h1}; ${({ theme }) => theme.body};;
  }
  
  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 9px;
  }
  
  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.body};
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.h1};
    
    border: 3px solid ${({ theme }) => theme.h1};
  }
  
`;