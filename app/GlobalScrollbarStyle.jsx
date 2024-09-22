"use client";
import React from "react";

const GlobalScrollbarStyle = () => (
  <style jsx global>{`
    /* Styles pour la barre de défilement principale */
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    /* Styles pour la "piste" de la barre de défilement */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #d9d9d9;
      background: #d9d9d9;
      border-radius: 15px;
    }

    /* Styles pour le "pouce" (la partie mobile) de la barre de défilement */
    ::-webkit-scrollbar-thumb {
      background: white;
      border-radius: 15px;
      opacity: 0.8;
      transition: opacity 0.2s;
    }

    /* Styles pour le "pouce" au survol */
    ::-webkit-scrollbar-thumb:hover {
      opacity: 1;
    }

    /* Styles pour le conteneur avec défilement */
    .custom-scrollbar-container {
      position: relative;
      overflow-y: auto;
    }

    /* Styles pour Firefox */
    * {
      scrollbar-width: thin;
      scrollbar-color: white #d9d9d9;
    }

    /* Styles pour IE et Edge */
    body {
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    /* Classe utilitaire pour les conteneurs avec défilement */
    .custom-scrollbar {
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: white #d9d9d9;
    }

    .custom-scrollbar::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    .custom-scrollbar::-webkit-scrollbar-track {
      background: #d9d9d9;
      border-radius: 15px;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: white;
      border-radius: 15px;
      opacity: 0.8;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      opacity: 1;
    }
  `}</style>
);

export default GlobalScrollbarStyle;
