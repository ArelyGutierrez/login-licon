import phoneIcon from '../images/phoneIcon.png';
import locationIcon from '../images/locationIcon.png';
import emailIcon from '../images/emailIcon.png'
import GrupoLicon3 from '../images/GrupoLicon3.png'
import banderaMex1 from '../images/banderaMex1.png'
import './Footer.css';

export const Footer = () => {
    return (
        <>
            <footer >
                <div id='loginFooter'>
                    <section>Contacto</section>
                    <section id="icons">
                        <img id='phoneIcon' src={phoneIcon} alt={phoneIcon} />
                        <img id='locationIcon' src={locationIcon} alt={locationIcon} />
                        <img id='emailIcon' src={emailIcon} alt={emailIcon} />
                    </section>
                    <section className='lastSection'>
                        <div id="terms">
                            <p className='terms'>TÉRMINOS Y CONDICIONE- AVISO DE PRIVACIDAD POLÍTICA ANTI-SOBORNO</p>
                        </div>
                        <div className='iconsMex'>
                            <p className='enterprise'>UNA EMPRESA DE</p>
                            <img id='GrupoLicon3' src={GrupoLicon3} alt={GrupoLicon3} />
                            <img id='banderaMex1' src={banderaMex1} alt={banderaMex1} />                            
                        </div>
                        <div>
                            <p className='rights'>TODOS LOS DERECHOS RESERVADOS-2021</p>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    )
}