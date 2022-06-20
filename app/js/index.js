let journalHead;
let journalAmount;
let journalDescription;

// add class to element functions(DRY code)
let addClasstoElement = (selector, className) =>{
    selector.classList.add(className);
};

let createRecord = ({getJournalHead, getJournalAmount, getJournalHeadDescription, appendToWhere}) =>{
    let element = document.createElement('div');
    addClasstoElement(element, "container");
    addClasstoElement(element, "record-container__container");
    addClasstoElement(element, "d-flex");
    addClasstoElement(element, "mt-2");
    element.innerHTML =`
    <div class="item-container w-75 record-container__journalHeader">${getJournalHead}</div>
    <div class="item-container w-25 record-container__money">${getJournalAmount}</div>
    `;
    document.querySelector(appendToWhere).appendChild(element);
};

// createRecord({getJournalHead: "some journal Head", getJournalAmount: "200"});

// get data when someone clicks the button
let getDataBtnInit = document.querySelectorAll(".get-data-btn");
let getDataBtn;
for (let counter = 0; counter < getDataBtnInit.length; counter++) {
    getDataBtn = getDataBtnInit[counter];

    getDataBtn.addEventListener("click", (event) => {

        let eventTextContent = event.target.textContent;
        console.log(typeof eventTextContent);

        //get data
        journalHead = document.querySelector(".journal-head").value;
        journalAmount = document.querySelector(".journal-amount").value;
        journalDescription = document.querySelector(".journal-details").value;

        // taking income and expense decision
        if (eventTextContent === "Income") {
            createRecord({getJournalHead: journalHead, getJournalAmount: journalAmount, getJournalHeadDescription: journalDescription, appendToWhere: ".income-category-journal"});
        } else if (eventTextContent === "Expense") {
            createRecord({getJournalHead: journalHead, getJournalAmount: journalAmount, getJournalHeadDescription: journalDescription, appendToWhere: ".expense-category-journal"});
        } else {
            return;
        }
    });



}
