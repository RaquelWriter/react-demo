import { useState } from 'react';
import '../stylesheets/Button.css';

function Counter(){
  const [ contador, setContador ] = useState(0);

  const manageClick = (prop) => {
    prop === 'counting' ?
      setContador (contador + 1)
      : setContador (0)
  };
  return (
    <div className='container'>
      <div className='contador'>{contador}</div>
      <div className='buttons-landing-page'><button className='button' onClick={() => manageClick('counting')}>Click me to count</button></div>
      <div className='buttons-landing-page'><button className='button' onClick={() => manageClick('reset')}>Reset</button></div>
      </div>
  );
}
export default Counter;