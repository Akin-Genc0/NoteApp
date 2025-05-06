const title = document.querySelector('#title');
const note = document.querySelector('#notes');
const saveBtn = document.querySelector('.sv');

function vaild() {
    if (title.value === "" || note.value === "") {
        alert("Enter values");
        return false;
    }
    return true;
}

saveBtn.addEventListener('click', function () {
    if (!vaild()) return;

    // Create note wrapper
    const noteWrapper = document.createElement('div');
    noteWrapper.style.background = "#f0f2f5";
    noteWrapper.style.borderLeft = "5px solid #007bff";
    noteWrapper.style.padding = "1rem";
    noteWrapper.style.marginBottom = "1rem";
    noteWrapper.style.borderRadius = "6px";

    // Title
    const titleEl = document.createElement('h4');
    titleEl.textContent = title.value;
    titleEl.style.marginBottom = "0.5rem";
    titleEl.style.color = "#333";

    // Body (hidden by default)
    const noteBody = document.createElement('p');
    noteBody.textContent = note.value;
    noteBody.style.display = "none";
    noteBody.style.marginTop = "0.75rem";

    // View button
    const viewBtn = document.createElement('button');
    viewBtn.textContent = "View Notes";
    viewBtn.style.backgroundColor = "#28a745";
    viewBtn.style.color = "#fff";
    viewBtn.style.border = "none";
    viewBtn.style.padding = "0.4rem 0.8rem";
    viewBtn.style.borderRadius = "5px";
    viewBtn.style.marginRight = "0.5rem";
    viewBtn.style.cursor = "pointer";

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    delBtn.style.backgroundColor = "#dc3545";
    delBtn.style.color = "#fff";
    delBtn.style.border = "none";
    delBtn.style.padding = "0.4rem 0.8rem";
    delBtn.style.borderRadius = "5px";
    delBtn.style.cursor = "pointer";

    // Append everything
    noteWrapper.appendChild(titleEl);
    noteWrapper.appendChild(viewBtn);
    noteWrapper.appendChild(delBtn);
    noteWrapper.appendChild(noteBody);

    // Insert into the page
    const noteContent = document.querySelector(".n");
    noteContent.appendChild(noteWrapper);

    // Clear input fields
    title.value = "";
    note.value = "";

    // View toggle
    viewBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        noteBody.style.display = noteBody.style.display === "none" ? "block" : "none";
    });

    // Delete button
    delBtn.addEventListener('click', function () {
        noteWrapper.remove();
    });
});

