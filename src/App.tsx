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
      <label htmlFor='word-input'>Your word</label>
      <input 
        value={word}
        onChange={(e) => setWord(e.target.value)}
      id="word-input" type="text" />

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
          <p>{synonym.word}</p>
        </li>
        ))}
      </ul>
      )}
    </div>
  )
}

export default App
