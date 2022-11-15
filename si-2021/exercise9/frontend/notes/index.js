
let noteIndex = 1;
const noteForm = document.getElementById('note-form');

/**
 * First select form input elements by querySelectorAll() and wrap them with Array.from().
 * With Array reduce() method return object that contains the form values. 
 */
function getFormValue() {
    const formElements = Array.from(noteForm.querySelectorAll('textarea, input, select'));
    return formElements.reduce((acc, el) => {
        acc[el.name] = el.value;
        return acc;
    }, {})
}

/**
 * Parse date using Date object.
 */
function getDateAsString(date) {
    const noteDate = new Date(date);
    return `${noteDate.getDate()}.${noteDate.getMonth()}.${noteDate.getFullYear()} г. - ${noteDate.getHours()}:${noteDate.getMinutes()} ч.`;
}

/**
 * Get delete button element by its it.
 * Add event listener to the button which deletes the note element by the id.
 */
function addDeleteBtnListener(noteId) {
    const deleteBtn = document.getElementById(`delete-btn-${noteId}`);
    deleteBtn.addEventListener('click', () => {
        const notesBody = document.getElementById('notes-body');
        const note = document.getElementById(noteId);
        notesBody.removeChild(note);
    });
}

/**
 * Render new note. 
 * First create new section element and add inner html to with note info in it.
 * Then append section element to this <article id="notes-body"> element.
 * Add event listener to new node delete button. 
 */
function renderNote(note) {
    const noteId = noteIndex++;

    const section = document.createElement('section');
    section.setAttribute('id', noteId);
    section.classList.add('note');
    section.innerHTML = `
        <header>
            <h2>
                ${note.name}
                <button id="delete-btn-${noteId}">Изтрий</button>
            </h2>
        </header>
        <article>
            <h3>Срок: ${note.dateAndTime}</h4>
            <h3>Приоритет: ${note.priority}</h4>
            <h3 class="mb-1">Описание: </h4>
            <p class="mt-0 text-justify">${note.desc}</p>
        </article>
    `;

    const notes = document.getElementById('notes-body');
    notes.appendChild(section);

    addDeleteBtnListener(noteId);
}

/**
 * Add invalid form message from the document setting its display style to 'block'.
 */
function renderInvalidMessage() {
    const invalidMessage = document.getElementById('invalid-msg');
    invalidMessage.style.display = 'block';
}

/**
 * Remove invalid form message from the document setting its display style to 'none'.
 */
function hideInvalidMessage() {
    const invalidMessage = document.getElementById('invalid-msg');
    invalidMessage.style.display = 'none';
}

/**
 * Handler function added on new note form 'submit' event.
 * First checks if form is valid and renders error message if it isn't.
 * Then retrievs form value and renders the new note.
 * event.preventDefault() is used to stop page reloading.
 */
// noteForm.addEventListener('submit', (event) => {

//     if (!noteForm.checkValidity()) {
//         renderInvalidMessage();
//         return;
//     }
//     hideInvalidMessage();

//     const note = getFormValue();
//     note.dateAndTime = getDateAsString(note.dateAndTime);

//     renderNote(note);

//     event.preventDefault();
// });
