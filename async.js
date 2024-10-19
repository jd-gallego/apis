const url = "https://rickandmortyapi.com/api/character";

const fetchData = async() => {
    const response = await fetch(url)
    const data = await response.json()
    renderImgs(data.results)
    console.log("Fecthing data...")
};

const renderImgs = (data) => {
    const container = document.querySelector(".container");
    data.forEach((character) => {
        console.log(character.image);
        const img = document.createElement("img");
        img.src = character.image;
        container.appendChild(img);
    });
};