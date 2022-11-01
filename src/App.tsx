import { useState } from 'react'
import { fetchSynonyms } from './api/fetchSynonyms';
import './App.css'
import { useGetSynonyms } from './hooks/useGetSynonyms';


function App() {

  const [word, setWord] = useState<string>("");
  const { isLoading, synonyms, getSynonyms } = useGetSynonyms();
  
  const handleFetchSynonyms = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    getSynonyms(word);
  };

  const handleSynonymClicked = (newWord: string) => {
    setWord(newWord);
    getSynonyms(word);
  }

  return (
    <div className="App">
    <form onSubmit={handleFetchSynonyms}>
      <div className="input-group">
        <label htmlFor='word-input'>Get the <span>Synonyms</span></label>
        <input 
          value={word}
          onChange={(e) => setWord(e.target.value)}
          id="word-input" type="text" placeholder='type your word'/>
      </div>
      <button>Submit</button>
    </form>

    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <ul>
        {synonyms.map((synonym, index) => (
        <li 
          onClick={() => handleSynonymClicked(synonym.word)}
          key={index}>
          <p>{synonym.word} <span>({synonym.score})</span></p>
        </li>
        ))}
      </ul>
      )}
    </div>
  )
}

export default App
