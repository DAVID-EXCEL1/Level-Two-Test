const fetchMe = () => {
    let url = 'https://musicapi-19wk.onrender.com/music/myAPI'
    fetch(url)
        .then(response => response.json())
        .then((convertedResponse) => {
            console.log(convertedResponse);
            convertedResponse.map((myAPI) => {
                show.innerHTML += `
            <div style="display: flex; justify-content: space-around; align-items: center; background-color: #433896; gap:10px;">
                <img src='${myAPI.songImage}' alt="dp" width="150"/>
                <div>
                    <h5>${myAPI.id}. ${myAPI.artistName}</h5>
                    <h6>${myAPI.songTitle}</h6>
                    <audio src='${myAPI.songUrl}' controls/>
                </div>
            </div>
            `
            })
        })
        .catch((err) => {
            console.log(err);
        })
}