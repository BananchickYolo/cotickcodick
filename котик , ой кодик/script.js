let heroes = [["Котик Барсик", "Самый Пушистый кот"], ["Кошка Мурка", "Самая прожорливая кошка"]];

let heroesContainer = document.getElementById('heroesContainer');

function displayHeroes() {
    for (let i = 0; i < heroes.length; i++) {
        let heroDiv = document.createElement("div");
        heroDiv.innerHTML = `<h3>${heroes[i][0]}</h3><p>${heroes[i][1]}</p>`;
        heroesContainer.appendChild(heroDiv);
    }
}

function createCard(name, description) {

    let heroBlock = document.createElement('div');
    let heroBlockHTML = "<h3>" + name + "</h3>" + "<p>" + description + "</p>";
    heroBlock.innerHTML = heroBlockHTML;
    heroesContainer.appendChild(heroBlock);

}

function addHero() {
    let nameInput = document.getElementById('nameInput');
    let descriptionInput = document.getElementById('descriptionInput');

    if (nameInput.value !== "" && descriptionInput.value !== "") {
        createCard(nameInput.value, descriptionInput.value);
    }

    nameInput.value = "";
    descriptionInput.value = ""

}

document.getElementById("addButton").addEventListener("click", addHero);

displayHeroes()


