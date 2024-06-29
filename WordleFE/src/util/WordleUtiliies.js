import { fetchWordData } from "../api/fetchWordData"


export async function isWordValid({ word = null}){
  const { response } = await fetchWordData(word)
  return response && response.status === 200
}

export async function generateWord() {
  const response = await fetch('http://localhost:5173/src/assets/words.txt');
  const text = await response.text();
  const words = text.split('\n');
  return words[Math.floor(Math.random() * words.length)].trim();
}


