let archive = [];
let trash = [];
let title = [];
let notes = [];
load();

function render() {
  let content = document.getElementById('content');
  content.innerHTML = '';
  content.innerHTML += `
  <div class="aside">
    <ul class="list">
      <li><a href="index.html"><span class="hide-mobile">Notes</span><i class="fas fa-sticky-note" title="Notes"></i></a></li>
      <li><a href="#"><span class="hide-mobile">Archive </span><i class="fas fa-archive" title="Archive"></i></a></li>
      <li><a href="#"><span class="hide-mobile">Trash </span><i class="fas fa-trash-alt" title="Bin"></i></a></li>
    </ul>
  </div>
  `;
  content.innerHTML += `
  <div class="main-content">
    <div class="notes" >
      <div>
        <input type="text" placeholder="Enter a Note" class="note-input" onchange="addNote()" onclick="openTitle()"><br>
        <textarea placeholder="Enter a Note.." class="note-text d-none"></textarea>
      </div>
      <div class="flex">
        <div>
          <a href="index.html"><i class="fas fa-pencil-alt">New Note</i></a>
          <i class="fas fa-save" title="Save Note" onclick="addNote()">Save</i>
        </div>
        <button onclick="closeTitle()" class="d-none">Close</button>
      </div>
    </div>
    <div id="note-block"></div>
  </div>
  `;


  for (let i = 0; i < notes.length; i++) {
    let noteBlock = document.getElementById('note-block');

    noteBlock.innerHTML += `
    <div>
      <h2>${title[i]}</h2>
      <br>
      <p>${notes[i]}</p> 
    </div> 
  `
  }

}

function openTitle() {
  document.getElementsByClassName('note-text')[0].classList.remove('d-none')
  document.getElementsByTagName('button')[0].classList.remove('d-none');
  document.getElementsByClassName('note-input')[0].outerHTML = `
  <input placeholder="Title..." class="note-input">
  `;

}

function closeTitle() {
  document.getElementsByClassName('note-text')[0].classList.add('d-none')
  document.getElementsByTagName('button')[0].classList.add('d-none')
  render();
}

function addNote() {
  let inputTitle = document.getElementsByClassName('note-input')[0];
  let inputText = document.getElementsByClassName('note-text')[0];
  if (inputTitle.value || inputText.value) {
    title.push(inputTitle.value);
    notes.push(inputText.value);
  } else alert('Gib einen Wert ein bevor du eine Notiz speicherst!');

  render();
  save();
}

function save() {
  let titleAsText = JSON.stringify(title);
  let notesAsText = JSON.stringify(notes);
  localStorage.setItem('title', titleAsText);
  localStorage.setItem('notes', notesAsText);
}

function load() {
  let titleAsText = localStorage.getItem('title');
  let notesAsText = localStorage.getItem('notes')

  title = JSON.parse(titleAsText);
  notes = JSON.parse(notesAsText);
}