import '../styles/Footer.css';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import pinterest from '../images/pinterest.png';

export default function Footer() {
    return (
        <div className='Footer'>
            <a href="https://www.facebook.com/megane.londono/" target="_blank"><img src={facebook} className="SoMeIcon" alt="SoMe-icon-1" /></a>
            <a href="https://www.instagram.com/meganelndn/" target="_blank"><img src={instagram} className="SoMeIcon" alt="SoMe-icon-2" /></a>
            <a href="https://www.pinterest.es/meganexx/" target="_blank"><img src={pinterest} className="SoMeIcon" alt="SoMe-icon-3" /></a>
        </div>
    );
}