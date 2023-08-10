import MD5 from "crypto-js/md5";

const getHash = (ts, secretKey, publicKey) => {
    return MD5(ts + secretKey + publicKey).toString()
}

let API_URL = process.env.REACT_APP_BASE_URL;

const fetchHeroes = async (name) => {
    let heroUrl = `${API_URL}/v1/public/characters`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);

    let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${name}`;

    try {
        console.log(url)
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.data.results);
        return data.data.results;
    } catch (err) {
        console.error(err);
        return;
    }

}

const fetchHero = async (id) => {
    let heroUrl = `${API_URL}/v1/public/characters/${id}`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);

    let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${id}`;

    try {
        console.log(url)
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }

}



export { fetchHeroes, fetchHero }