import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-bb pt-10">
      <div className="container grid lg:grid-cols-5 pb-3">
        <a
          href="https://www.alfaromeo.co.ma/note-d-information"
          className="semi text-sm text-white flex justify-center items-center"
        >
          Politique de confidentialité
        </a>
        <a
          href="https://www.alfaromeo.co.ma/protection-de-donnees"
          className="semi text-sm text-white flex justify-center items-center"
        >
          Mentions légales
        </a>
        <a
          href="javascript:getCookieOpenModal()"
          className="semi text-sm text-white flex justify-center items-center"
        >
          COOKIE
        </a>
        <a
          href="https://www.alfaromeo.co.ma/droits-auteur"
          className="semi text-sm text-white flex justify-center items-center"
        >
          Droits d&apos;auteur
        </a>
        <a
          href="https://www.alfaromeo.co.ma/droits-auteur"
          className="semi text-sm text-white flex justify-center items-center"
        >
          Conditions d&apos;utilisation
        </a>
      </div>
      <div className="grid lg:grid-cols-3 items-center justify-center">
        <div></div>
        <div>
          <p className="text-white text-sm flex items-center justify-center py-5">
            <FaRegCopyright />
            2022 Alfa Romeo All Rights Reserved.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
