import axios from 'axios';

export async function postScore(id, score, words) {
    try {
        const url = `http://localhost:8080/wordle/scores/${id}`;
        const data = { score, words };
        const response = await axios.post(url, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.log('Failed to post score: ' + error.message);
        return null;
    }
}

// export async function fetchUserData() {
//   try {
//     const response = await axios.get("http://localhost:8080/wordle/user", {
//       withCredentials: true
//     });
//     const { name, email, picture } = response.data;

//     return { data: { name, email, picture }, isLoggedIn: true };
    
//   } catch (error) {
//     console.log('Authorization failed: ' + error.message);
//     return { isLoggedIn: false };
//   }
// }