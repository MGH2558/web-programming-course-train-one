const form = document.querySelector('#formName');


form.addEventListener('submit', e => {
    e.preventDefault();

    const nameInput = form.name.value.trim();

    if (nameInput.length) {
        showName(capitalizer(nameInput));
    } else {
        alert('Enter a name first');
    }

    form.reset();
})


const showName = nameInput => {
    const nameContainer = document.createElement('h1');

    nameContainer.classList.add('nameContainer--style');
    nameContainer.textContent = `Hello , ${nameInput}`;

    form.appendChild(nameContainer);
}

const capitalizer = name => {
    const firstLetter = name.slice(0, 1).toUpperCase();
    const restLetters = name.substr(1);

    return firstLetter + restLetters;
}