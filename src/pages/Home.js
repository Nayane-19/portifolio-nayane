import React from 'react';
import Nav from '../components/Nav';
import '../styles/Home.css';



function Home() {
 
  return (
    <section className="container">
       <div className="button-container">
        <Nav link="/About" title="Sobre mim"/>  
        <Nav link="/Projetos" title="Projetos"/> 
        <Nav link="/Contato" title="Contato"/>
        </div> 
    <div className="body">      
      <div className="Titulo typing-animation">
        <p>Olá!!!</p> <p> Eu sou Nayane, </p> 
      <p>Desenvolvedora Front-End.</p>
      </div>
      </div>
     
    </section>
  );
}


export default Home;