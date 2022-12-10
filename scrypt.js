// const btnChanege = document.getElementById("allBtn");
// const activePageChange = document.getElementById("activeBtn");
// const completedPageChange = document.getElementById("CompletedBtn");

// const chagePage = function(event) {
//     event.target.className.toggle = ("active");
//     if (event.className === "active") {
//         event.target.className.toggle = ("activeOff");
//     } else {

//         event.target.className = "active"
//     }

// }


// btnChanege.addEventListener("click", chagePage);
// activePageChange.addEventListener("click", chagePage);
// completedPageChange.addEventListener("click", chagePage);

const allPageChange = document.getElementById("allBtn");
const activePageChange = document.getElementById("activeBtn");
const completedPageChange = document.getElementById("CompletedBtn");

function allPage() {
    allPageChange.classList.add = "active";
    activePageChange.classList.remove("active");
    completedPageChange.classList.remove("active");
    window.location.href = "index.html";

}

function activePage() {
    activePageChange.classList.add = "active";
    allPageChange.classList.remove("active");
    completedPageChange.classList.remove("active");
    window.location.href = "active.html";

}

function completedPage() {
    completedPageChange.classList.add = "active";
    allPageChange.classList.remove("active");
    activePageChange.classList.remove("active");
    window.location.href = "complete.html";
}


const btn5 = document.querySelector(".btn5")

const inputForm = document.getElementById("addForm");
const inputValue = inputForm[0];
const addInfo = document.querySelector(".addUl")


inputForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const addLi = document.createElement('li');
    const addinput = document.createElement('input');
    const addlabel = document.createElement('label');
    addinput.type = "checkbox"




    addInfo.appendChild(addLi);
    addLi.appendChild(addinput);
    addLi.appendChild(addlabel);
    addlabel.innerHTML = inputValue.value;


    addinput.addEventListener("change", () => {

        if (addinput.checked) {
            addlabel.style.textDecoration = "line-through";
            addlabel.style.color = "green";





            // location.replace("complete.html")

        } else {
            addlabel.style.textDecoration = "none";
            addlabel.style.color = "none";
            // location.replace("active.html")
        }
    })

});