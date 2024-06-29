import axios from 'axios'

export async function fetchWordData(word = null) {
  if (!word) return { data: null, response: null }

  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    return { data: response.data, response }
  } catch (error) {
    return { data: null, response: error.response }
  }
}

