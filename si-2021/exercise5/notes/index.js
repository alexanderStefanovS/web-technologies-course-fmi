
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
        deleteNote(noteId);
    });
}

/**
 * Render new note. 
 * First create new section element and add inner html to with note info in it.
 * Then append section element to this <article id="notes-body"> element.
 * Add event listener to new node delete button. 
 */
function renderNote(note) {
    const section = document.createElement('section');
    section.setAttribute('id', note.id);
    section.classList.add('note');
    section.innerHTML = `
        <header>
            <h2>
                ${note.title}
                <button id="delete-btn-${note.id}">Изтрий</button>
            </h2>
        </header>
        <article>
            <h3>Срок: ${getDateAsString(note.dateAndTime)}</h4>
            <h3>Приоритет: ${note.priority}</h4>
            <h3 class="mb-1">Описание: </h4>
            <p class="mt-0 text-justify">${note.description}</p>
        </article>
    `;

    const notes = document.getElementById('notes-body');
    notes.appendChild(section);

    addDeleteBtnListener(note.id);
}

/**
 * Removes the note from the DOM after it was deleted by the backend
 */
function removeNote(noteId) {
    const notesBody = document.getElementById('notes-body');
    const note = document.getElementById(noteId);
    notesBody.removeChild(note);
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

//#region services 

function saveNote(note) {
    fetch('./backend/notes.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note)
    })
    .then(res => res.json())
    .then(savedNote => {
        renderNote(savedNote);
    });
}

function getNotes() {
    fetch('./backend/notes.php')
        .then(res => res.json())
        .then(notes => {
            notes.forEach(note => {
                renderNote(note);
            });
        });
}

function deleteNote(id) {
    fetch('./backend/notes.php', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id})
    })
    .then(res => res.json())
    .then(data => {
        removeNote(data.id);
    });

}

//#endregion

(() => {

    /**
     * Handler function added on new note form 'submit' event.
     * First checks if form is valid and renders error message if it isn't.
     * Then retrievs form value and renders the new note.
     * event.preventDefault() is used to stop page reloading.
     */
    noteForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!noteForm.checkValidity()) {
            renderInvalidMessage();
        } else {
            hideInvalidMessage();
            const note = getFormValue();
            saveNote(note);
        }
    });

    getNotes();

})();