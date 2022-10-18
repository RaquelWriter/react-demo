import { useState, useEffect } from 'react';
import '../stylesheets/Button.css';
import '../App.css';
import '../stylesheets/StonePaperScissorsGame.css';

function StonePaperScissorsGame() {
  /*STONE PAPER SCISSORS*/
  const [spsUser, setSpsUser] = useState('');
  const [spsMachine, setSpsMachine] = useState('');
  const [resultGameSPS, setResultGameSPS] = useState(
    'Do you have what it takes?'
  );
  const [spsUserPoints, setSpsUserPoints] = useState(0);
  const [spsMachinePoints, setSpsMachinePoints] = useState(0);

  const handleClickChoice = (e) => {
    setSpsUser(e);
    setUpMachineElection();
  };

  const convertSPSToString = (n) => {
    switch (n) {
      case 0:
        return 'Stone';
      case 1:
        return 'Paper';
      case 2:
        return 'Scissors';
      default:
        return '';
    }
  };

  const setUpMachineElection = () => {
    const election = Math.floor(Math.random() * 3);
    const electionString = convertSPSToString(election);
    setSpsMachine(electionString);
  };

  useEffect(() => {
    const match = spsUser + spsMachine;
    if (
      match === 'StoneScissors' ||
      match === 'PaperStone' ||
      match === 'ScissorsPaper'
    ) {
      const points = spsUserPoints + 1;
      setSpsUserPoints(points);
      setResultGameSPS('You WIN!');
    }
    if (
      match === 'ScissorsStone' ||
      match === 'StonePaper' ||
      match === 'PaperScissors'
    ) {
      const points = spsMachinePoints + 1;
      setSpsMachinePoints(points);
      setResultGameSPS('I WIN!');
    }
    if (
      match === 'ScissorsScissors' ||
      match === 'StoneStone' ||
      match === 'PaperPaper'
    ) {
      setResultGameSPS("It's a TIE");
    }
  }, [spsUser, spsMachine]);

  return (
    <div className='container'>
      <h1>Stone / Paper / Scissors</h1>
      <h2>Choose!</h2>
      <div className='container-stone-paper-scissors'>
        <div className='img-stone-paper-scissors'>
          <img
            alt=''
            className='imgSPS'
            onClick={(e) => handleClickChoice('Stone')}
            src={require('../images/stone.png')}
          />
        </div>
        <div className='img-stone-paper-scissors'>
          <img
            alt=''
            className='imgSPS'
            onClick={(e) => handleClickChoice('Paper')}
            src={require('../images/paper.png')}
          />
        </div>
        <div className='img-stone-paper-scissors'>
          <img
            alt=''
            className='imgSPS'
            onClick={(e) => handleClickChoice('Scissors')}
            src={require('../images/scissors.png')}
          />
        </div>
      </div>
      <div className='results-stone-paper-scissors'>
        <div>
          You choose: {spsUser} / I choose: {spsMachine}
        </div>
        <div>{resultGameSPS}</div>
        <div>
          Your points: {spsUserPoints}/ My points: {spsMachinePoints}
        </div>
      </div>
    </div>
  );
}

export default StonePaperScissorsGame;
