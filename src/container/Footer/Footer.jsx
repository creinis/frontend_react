import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <footer className="footer">
      {/* Área Principal */}
      <div className="footer-main">
        {/* Coluna 1 - Sobre Nós */}
        <div className="col">
          <h5>About</h5>
          <ul className="footer-links">
            <li><a href="#empresa">Our Company</a></li>
            <li><a href="#historia">History</a></li>
            <li><a href="#manifesto">Mission</a></li>
            <li><a href="#membros">Ethics</a></li>
          </ul>
          <h5>Fale Conosco</h5>
          <ul className="footer-links">
            <li><a href="#evento">Agende um Evento</a></li>
            <li><a href="#candidato">Candidate-se</a></li>
            <li><a href="#voluntario">Seja Voluntário</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contato">Contatos</a></li>
          </ul>
        </div>

        {/* Coluna 2 - Sua Conta */}
        <div className="col">
          <h5>Sua Conta</h5>
          <ul className="footer-links">
            <li><a href="#editar_conta">Edite sua Conta</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
            <li><a href="#informacoes">Mais Informações</a></li>
          </ul>
          <h5>Links Úteis</h5>
          <ul className="footer-links">
            <li><a href="#acompanhamento">Acompanhe x</a></li>
            <li><a href="#verificar">Verificar y</a></li>
            <li><a href="#outros_links">Outros Links</a></li>
          </ul>
        </div>

        {/* Coluna 3 - Patrocinadores */}
        <div className="col">
          <h5>Clients</h5>
          <ul className="footer-links">
            <li><a href="#marca1">Brand 1</a></li>
            <li><a href="#marca2">Brand 2</a></li>
            <li><a href="#marca3">Brand 3</a></li>
            <li><a href="#marca4"></a></li>
          </ul>
        </div>

        {/* Coluna 5 e 6 - Formulário de Contato */}
        <div className="col col-5-6-container">
          <h5>Fale Conosco</h5>
          {!isFormSubmitted ? (
            <div className="footer_form">
              <input
                className="footer_input"
                type="text"
                placeholder="Seu Nome"
                name="name"
                value={name}
                onChange={handleChangeInput}
              />
              <input
                className="footer_input"
                type="email"
                placeholder="Seu Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
              <textarea
                className="footer_textarea"
                placeholder="Sua Mensagem"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
              <button type="button" className="footer_button" onClick={handleSubmit}>
                {!loading ? 'Enviar Mensagem' : 'Enviando...'}
              </button>
            </div>
          ) : (
            <h3 className="footer_thankyou">Obrigado por entrar em contato!</h3>
          )}
        </div>
      </div>


      {/* Texto Comercial */}
      <div className="footer-commercial">
        <p>For more information see our <a href="#terms">terms of use</a> and <a href="#privacy">privacy policies</a>.</p>
      </div>

      {/* Copyright e Links */}
      <div className="footer-copyright">
        <div className="row">
          <div className="col text-left">
            <p>&copy;&nbsp;Copyright 2024 - Sinier Dev Tech. All Rights Reserved.</p>
          </div>
          <div className="col text-center">
            <a href="#privacy">Privacy Policy</a> | 
            <a href="#terms">Terms of Use</a> | 
            <a href="#donations">Donations</a> | 
            <a href="#sitemap">Site Map</a>
          </div>
          <div class="col text-right">
            {/* Botão para alternar de idiomas */}
            <span style={{opacity: 0}}>EN | PT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
