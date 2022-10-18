import { Link } from 'react-router-dom';
import '../stylesheets/Button.css';
import '../stylesheets/LandingPage.css';
import posticksImg from '../images/posticks.jpg';
import calculatorImg from '../images/calculator.jpg';
import countdownImg from '../images/countdown.jpg';
import counterImg from '../images/counter.jpg';
import usersTableImg from '../images/userstable.jpg';
import stonepaperscissorsImg from '../images/stonepaperscissors.jpg';

function LandingPage() {
  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>Raquel S. Ventero</h1>
          <h2>DEMO LANDING PAGE</h2>
        </div>
        <div className='container-landing-page'>
          <div>
            <Link to='/Posticks'>
              <p>
                <img alt='' src={posticksImg} className='screenshotsLandingPage' />
              </p>
              <button className='button button-lila-neon'>POSTICKS</button>
            </Link>
          </div>
          <div>
            <Link to='/Calculator'>
              <p>
                <img alt='' src={calculatorImg} className='screenshotsLandingPage' />
              </p>
              <button className='button button-lila-neon'>CALCULATOR</button>
            </Link>
          </div>
          <div>
            <Link to='/Countdown'>
              <p>
                <img alt='' src={countdownImg} className='screenshotsLandingPage' />
              </p>
              <button className='button button-lila-neon'>COUNTDOWN</button>
            </Link>
          </div>
          <div>
            <Link to='/StonePaperScissorsGame'>
              <p>
                <img alt='' src={stonepaperscissorsImg} className='screenshotsLandingPage' />
              </p>
              <button className='button button-lila-neon'>Paper Stone Scissors</button>
            </Link>
          </div>
          <div>
            <Link to='/UsersTable'>
              <p>
                <img alt='' src={usersTableImg} className='screenshotsLandingPage' />
              </p>
              <button className='button button-lila-neon'>JSON DB</button>
            </Link>
          </div>
          <div>
            <Link to='/Counter'>
              <p>
                <img alt='' src={counterImg} className='screenshotsLandingPage' />
              </p>
              <button className='button button-lila-neon'>COUNTER</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
