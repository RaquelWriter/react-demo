import '../stylesheets/LoadingSpinner.css';
import spinner from '../images/spinner-1s-200px_blue.svg';

function LoadingSpinner() {
  return <div className='loading-spinner'><img src={spinner}/></div>
}

export default LoadingSpinner;
