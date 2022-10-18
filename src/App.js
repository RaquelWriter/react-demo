import { Suspense, lazy} from 'react';
import './App.css';
import './stylesheets/Button.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoadingSpinner from './components/LoadingSpinner';

const StonePaperScissorsGame = lazy(() => import('./components/StonePaperScissorsGame'));
const Calculator = lazy(() => import('./components/Calculator'));
const UsersTable = lazy(() => import('./components/UsersTable'));
const Posticks = lazy(() => import('./components/Posticks'));
const Counter = lazy(() => import('./components/Counter'));
const LandingPage = lazy(() => import('./components/LandingPage'));
const Countdown = lazy(() => import('./components/Countdown'));

/*
import Calculator from './components/Calculator';
import UsersTable from './components/UsersTable';
import Posticks from './components/Posticks';
import Counter from './components/Counter';
import LandingPage from './components/LandingPage';
import Countdown from './components/Countdown';
*/

/* SAMPLE 2
EVENTLISTENER WITH USEEFFECT

function App() {
  const [windowWidth, setWindoWidth] = useState(window.innerWidth)
  
  const handleResize = () => {
    setWindoWidth(window.innerWidth)
  }

  useEffect(() =>{
    window.addEventListener('resize', handleResize)

    // This return will runs FIRST the function inside
    // useEffect. Also it runs when the component is unmount
    // This return has a function to remove the eventListener
    // (CLEAN CODE !!)
    // We can consider this return as a cleanup of
    // whatever we did before in useEffect or in the component.
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div>
      {windowWidth}
    </div>
  );
}

export default App;

END OF SAMPLE 2
*/

/*
SAMPLE 1 

**** FETCH A JSON

function App() {
  const [resourceType, setResourceType] = useState('post')
  const [items, setItems] = useState([])
  // The function inside useEffect will run every time
  // the component renders
  // If we want the useEffect inside function runs only
  // when something special happens, we pass a second paramenter
  // which will be an array
  // whenever this value change the function inside useEffect
  // will run

  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
        .then(json => setItems(json))
        .catch(() => console.log("Failed to connect to JSON"))
  }, [resourceType])
  return (
    <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>

      <h1>{resourceType}</h1>
    </div>
    {items.map(item => {
      return <pre>{JSON.stringify(item)}</pre>
    })}
  </>
  );
}
export default App;


ENDS SAMPLE 1
*/

/* SAMPLE 3
FETCH DATA WITH AXIOS AND USEEFFECT

import axios from 'axios';

const fetchData = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then ((result) => {
      console.log(result)
    })
    .catch((err) =>{
      console.error(err);
    })
}
*/

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/Countdown' element={<Countdown />} />
          <Route exact path='/Posticks' element={<Posticks />} />
          <Route exact path='/Calculator' element={<Calculator />} />
          <Route exact path='/StonePaperScissorsGame' element={<StonePaperScissorsGame />} />
          <Route exact path='/UsersTable' element={<UsersTable />} />
          <Route exact path='/Counter' element={<Counter />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
