import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

// Animação de fade-in para a nova imagem
const fadeInVariant = {
  hidden: { opacity: 0 }, // Começa invisível
  visible: { opacity: 0.8 }, // Torna-se visível
};

const Header = () => {
  return (
    <div className="app__header app__flex" style={{ position: 'relative' }}>
      {/* Imagem de background estática */}
      <img
        src={images.backgroundImg} // Background original
        alt="Background"
        className="background-image"
        style={{
          width: '100%',
          height: '100vh', // Ocupa a altura completa da tela
          objectFit: 'cover', // Cobre toda a área sem distorção
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1, // Certifique-se de que fica atrás
        }}
      />

      {/* Animação de fade-in da nova imagem sobreposta */}
      <motion.img
        src={images.logoBackground} // Nova imagem que vai fazer o fade-in
        alt="Logo"
        variants={fadeInVariant} // Variantes da animação
        initial="hidden" // Estado inicial: invisível
        animate="visible" // Estado final: visível
        transition={{
          duration: 5, // Duração da animação
          ease: 'easeInOut', // Suavização do efeito
        }}
        style={{
          width: '100%',
          height: '100vh', // Ocupa a altura completa da tela
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2, // Certifique-se de que está sobre o background
        }}
      />
    </div>
  );
};

export default AppWrap(Header, 'home');
