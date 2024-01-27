import axios from 'axios';

export default function getRandomJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }; 

    axios.get('https://icanhazdadjoke.com', config).then((res) => {
        document.getElementById('joke').innerHTML = res.data.joke;
    });
    
}