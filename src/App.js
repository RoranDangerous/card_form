import { useEffect, useState } from 'react';
import CardForm from './CardForm';
import ReactGA from 'react-ga';
import './App.css';

const App = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    ReactGA.initialize('UA-175259430-1')
  })

  if(submitted){
    return (
      <h1 className='Thanks'>Thank you!</h1>
    )
  }

  return (
    <div className="App">
      <CardForm onSubmit={() => setSubmitted(true)}/>
    </div>
  );
}

export default App;
