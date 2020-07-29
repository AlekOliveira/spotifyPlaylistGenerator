//Nova implementação
class APIController {

    constructor() {
        this.clientId = '4f6e72b0c55a42818f3e02441edbc64b';
        this.clientSecret = '3300672efefb4033906e66c031cf947b';
        this.tokenID;
    }

    // private methods
    async getToken() {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        this.tokenID = data.access_token;
    }

    // exemplo de uso com axios.post('url', {Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)})

    /*
    const _getGenres = async (token) => {
  
        const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + await _getToken()}
        });
  
        const data = await result.json();
        return data.categories.items;
    }
  
    const _getPlaylistByGenre = async (token, genreId) => {
  
        const limit = 10;
        
        const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });
  
        const data = await result.json();
        return data.playlists.items;
    }
  
    const _getTracks = async (token, tracksEndPoint) => {
  
        const limit = 10;
  
        const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });
  
        const data = await result.json();
        return data.items;
    }
  
    const _getTrack = async (token, trackEndPoint) => {
  
        const result = await fetch(`${trackEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });
  
        const data = await result.json();
        return data;
    }
  
    const _getArtists = async (token) => {
        const result = await fetch('https://api.spotify.com/v1/search/?q=disturbed&type=artist', {
          method: 'GET',
          headers: {'Authorization' : 'Bearer ' + await _getToken()}
        });
  
        const data = await result.json();
        return data;
    }
  */
   
}



async function executa() {
    const cot = new APIController();
    await cot.getToken();
    console.log(cot.tokenID);
}

executa();







