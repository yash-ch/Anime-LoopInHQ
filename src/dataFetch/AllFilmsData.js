import fetch from 'isomorphic-unfetch'

export async function GetRawData() {
    try {
        const tokenAccounts = await fetch("https://ghibliapi.herokuapp.com/films", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        return await tokenAccounts.json();

    } catch (error) {
        console.log(error)
    }
}

export async function TopBanner(){
    //to return random top banner
    let randomFilmIndex = 5;
    randomFilmIndex = Math.floor(Math.random() * (21)) + 1;
    const bekarImages = [1,4,15,0,18]
    if (bekarImages.includes(randomFilmIndex) && window.innerWidth < 768){
        randomFilmIndex = 21;
    }
    console.log(randomFilmIndex)
    return await GetRawData().then((data) => {
        return data[randomFilmIndex];
    });
}
//1 4
