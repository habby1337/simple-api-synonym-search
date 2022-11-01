import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [word, setWord] = useState<string>("")

  const handleFetchSynonyms = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();

  }


  return (
    <form onSubmit={handleFetchSynonyms}>
      <label htmlFor='word-input'>Your word</label>
      <input 
        value={word}
        onChange={(e) => setWord(e.target.value)}
      id="word-input" type="text" />

      <button>Submit</button>
    </form>
  )
}

export default App
