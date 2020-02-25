import React from "react";
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Contact = () => {
  return (
    
    <div>
    <Modal />
      <div
      className="ui raised very padded text container segment"
      style={{ marginTop:'80px' }}
    >
      <Link to='/card/Daniel' className="ui header">Daniel </Link>
      <p>
        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
        simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de
        la littérature latine classique datant de 45 av. J.-C., le rendant vieux
        de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est
        intéressé à un des mots latins les plus obscurs, consectetur, extrait
        d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot
        dans la littérature classique, découvrit la source incontestable du
        Lorem Ipsum. 
      </p>
    </div>
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop:'80px' }}
    >
      <Link  to='/card/Mandjo' className="ui header">Mandjo </Link>
      <p>
        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
        simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de
        la littérature latine classique datant de 45 av. J.-C., le rendant vieux
        de 2000 ans. 
      </p>
    </div>
    </div>
  );
};

export default Contact;
