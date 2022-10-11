import { useState } from 'react';
import '../stylesheets/Button.css';
import '../stylesheets/Counter.css';
import '../stylesheets/LandingPage.css';

function Counter(){
  const [ contador, setContador ] = useState(0);

  const manageClick = (prop) => {
    prop === 'counting' ?
      setContador (contador + 1)
      : setContador (0)
  };
  return (
    <div className='container contador-container'>
      <div className='contador'>{contador}</div>
      <div><button className='button button-lila-neon counter' onClick={() => manageClick('counting')}>Click me to count</button></div>
      <div><button className='button button-lila-neon counter' onClick={() => manageClick('reset')}>Reset</button></div>
    </div>
  );
}
export default Counter;