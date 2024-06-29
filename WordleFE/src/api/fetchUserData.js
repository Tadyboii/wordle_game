import axios from 'axios';

export async function fetchUserData() {
  try {
    const response = await axios.get("http://localhost:8080/wordle/user", {
      withCredentials: true
    });
    const { id, name, email, picture } = response.data;

    return { data: { id, name, email, picture }, isLoggedIn: true };
    
  } catch (error) {
    console.log('Authorization failed: ' + error.message);
    return { isLoggedIn: false };
  }
}