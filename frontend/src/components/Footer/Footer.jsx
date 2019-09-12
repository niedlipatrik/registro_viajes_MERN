import React from 'react';
import './Footer.scss'
const Footer = props => {

    return (
        <footer>
            <div className="ayuda">
                <h3>NECESITAS AYUDA?</h3>
                <br />
                <p>0264 123 4567
                <br />
                    enquiry@geekshubstravels.com
            </p>
                <div className="horario">
                    Lun-Vie. 9:30-19:30 Sab:10:00-14:00
            </div>
            </div>
            <div className="informacion">
                <h3>INFORMACION</h3>
                <ul>
                    <li>Quienes somos</li>
                    <li>Preguntas frecuentes</li>
                    <li>Política de privacidad</li>
                    <li>Condiciones generales</li>
                    <li>Aviso legal</li>
                    <li>Contacto</li>
                    <li>Programa de puntos</li>
                </ul>
            </div>
            <div className="suscribete">
                <h3>SUSCRIBETE A LA NEWSLETTER</h3>
                <br />
                <input type="email" placeholder="Correo electrónico" />
                <br />
                <button>SUSCRIBETE</button>
                <br />
                <div className="socialMedia">
                    <a href="https://twitter.com/geeks_academy" target="_blank" rel="noopener noreferrer">
                        <img src="images/tt-ico.png" alt="Twitter" />
                    </a>
                    <a href="#"> <img src="images/ws-ico.png" alt="WhatsApp" /></a>
                    <a href="https://www.facebook.com/geekshubsacademy/" target="_blank" rel="noopener noreferrer">
                        <img src="images/fb-ico.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/geekshubs/" target="_blank" rel="noopener noreferrer">
                        <img src="images/Instagram.png" alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/school/geekshubsacademy/" target="_blank" rel="noopener noreferrer">
                        <img src="images/linkedIn.png" alt="linkedIn" /></a>
                    <a href="https://www.youtube.com/user/geekshubs" target="_blank" rel="noopener noreferrer">
                        <img src="images/YT.png" alt="Youtube" />

                    </a>
                </div>
            </div>


        </footer>
    )
}
export default Footer;