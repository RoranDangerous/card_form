import { useState } from 'react';
import CardForm from './CardForm';
import './App.css';

const App = () => {
  const [submitted, setSubmitted] = useState(false);

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
