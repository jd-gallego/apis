const url = "https://rickandmortyapi.com/api/character";

const fetchData = () => {
    fetch(url)
    .then((data) => data.json())
    .then((resp) => renderImgs(resp.results))
    .catch((err) => {
        console.log(err);
    });
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