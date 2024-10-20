let close = document.getElementsByClassName("close");
let list = document.querySelector('ul');
let li;

// Function to add a new task
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let closeBtn = document.createElement("SPAN");
        let closeTxt = document.createTextNode("\u00D7");
        closeBtn.className = "close";
        closeBtn.appendChild(closeTxt);
        li.appendChild(closeBtn);

        closeBtn.onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }

        list.appendChild(li);
    }
    document.getElementById("myInput").value = "";

    // Add event listener to mark tasks as completed
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

// Close button functionality
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}