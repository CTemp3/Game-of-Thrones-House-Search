const charactersList = document.getElementById('charactersList');
let hpCharacters = [];

const loadCharacters = async () => {
    try {
        const res = await fetch("https://thronesapi.com/api/v2/Characters")
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.fullName}</h2>
                <p>title:${character.title}
                <img src="${character.imageUrl}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();