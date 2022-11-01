import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


type Synonym = {
  word: string;
  score: number;
};

const API_URL = import.meta.env.API_URL ?? 'https://api.datamuse.com'

function App() {

  const [word, setWord] = useState<string>("");
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);

  const handleFetchSynonyms = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();

    fetch(`${API_URL}/words?rel_syn=${word}`)
      .then((response) => response.json())
      .then((data) => setSynonyms(data));
  }


  return (
    <div className="App">
    <form onSubmit={handleFetchSynonyms}>
      <label htmlFor='word-input'>Your word</label>
      <input 
        value={word}
        onChange={(e) => setWord(e.target.value)}
      id="word-input" type="text" />

      <button>Submit</button>
    </form>
    <ul>
    {synonyms.map((synonym, index) => (
      <li key={index}>
        <p>{synonym.word}</p>
      </li>)
    )}
      </ul>
    </div>
  )
}

export default App
