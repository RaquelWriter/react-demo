import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import '../stylesheets/Countdown.css';
import '../stylesheets/Calendar.css';

function Countdown() {
  const [dateChoosen, setDateChoosen] = useState(new Date());
  const [countDays, setCountDays] = useState(0);
  const [countHours, setCountHours] = useState(0);
  const [countMinutes, setCountMinutes] = useState(0);
  const [countSeconds, setCountSeconds] = useState(0);

  const handleDateChange = (e) => {
    setDateChoosen(e);
    console.log(dateChoosen.getTime());
    console.log(countDays);
  };

  let interval;
  let diff;
  let myDate;
  useEffect(() => {
    myDate = new Date(dateChoosen).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      diff = myDate - now;
      var diff_as_date = new Date(diff);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // days
      const hours = diff_as_date.getHours(); // hours
      const minutes = diff_as_date.getMinutes(); // minutes
      const seconds = diff_as_date.getSeconds(); // seconds

      if (diff < 0) {
        //Stop CountDown
        clearInterval(interval.current);
      } else {
        //Update
        setCountDays(days);
        setCountHours(hours);
        setCountMinutes(minutes);
        setCountSeconds(seconds);
      }
    });
    return () => {
      myDate = new Date().getTime();
    };
  }, [dateChoosen]);

  return (
    <>
      <div className='container' id='countdown'>
        <div className='title'>
          <h1>COUNTDOWN</h1>
        </div>
        <div className='countdowm-pick-date'>
          <p>Pick your date to start countdown:</p>
          <p>
            <Calendar
              className='calendar'
              onChange={(e) => handleDateChange(e)}
              value={dateChoosen}
              minDate={new Date()}
            />
          </p>
        </div>
        <div className='countdown-counter'>
          <section>
            <p className='counter-part'>{countDays} : </p>
            <p className='small-text'>days</p>
          </section>
          <section>
            <p className='counter-part'>{countHours} : </p>
            <p className='small-text'>hours</p>
          </section>
          <section>
            <p className='counter-part'>{countMinutes} : </p>
            <p className='small-text'>minutes</p>
          </section>
          <section>
            <p className='counter-part'>{countSeconds}</p>
            <p className='small-text'>seconds</p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Countdown;
