import axios from "axios";

export async function fetchHighscores() {
    try {
        const response = await axios.get("http://localhost:8080/wordle/scores", {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.log('Failed to fetch highscores: ' + error.message);
        return null;
    }
}
