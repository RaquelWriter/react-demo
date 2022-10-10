import { Link } from 'react-router-dom';
import '../stylesheets/Button.css';

function LandingPage() {
  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>Raquel S. Ventero</h1>
          <h2>DEMO LANDING PAGE</h2>
        </div>
        <div className='buttons-landing-page'>
          <Link to='/Posticks'>
            <button className='button'>POSTICKS</button>
          </Link>
        </div>
        <div className='buttons-landing-page'>
          <Link to='/Calculator'>
            <button className='button'>CALCULATOR</button>
          </Link>
        </div>
        <div className='buttons-landing-page'>
          <Link to='/Countdown'>
            <button className='button'>COUNTDOWN</button>
          </Link>
        </div>
        <div className='buttons-landing-page'>
          <Link to='/UsersTable'>
            <button className='button'>USERS JSON DB FETCHING</button>
          </Link>
        </div>
        <div className='buttons-landing-page'>
          <Link to='/Counter'>
            <button className='button'>COUNTER</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
