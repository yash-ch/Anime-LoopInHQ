import fetch from 'isomorphic-unfetch'

export async function GetRawData() {
    try {
        const rawFilmData = await fetch("https://ghibliapi.herokuapp.com/films", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        return await rawFilmData.json();

    } catch (error) {
        console.log(error)
    }
}

export async function TopBanner() {
    //to return random top banner
    let randomFilmIndex = 5;
    randomFilmIndex = Math.floor(Math.random() * (21)) + 1;
    const bekarImages = [1, 4, 15, 0, 18]
    if (bekarImages.includes(randomFilmIndex) && window.innerWidth < 768) {
        randomFilmIndex = 5;
    }
    return await GetRawData().then((data) => {
        return data[randomFilmIndex];
    });
}

export async function SingleAnimeData(animeid){
    try {
        const rawAnimeData = await fetch(`https://ghibliapi.herokuapp.com/films/${animeid}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        return await rawAnimeData.json();

    } catch (error) {
        console.log(error)
    }
}