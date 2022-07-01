// let journalHead;
// let journalAmount;
// let journalDescription;

// // a short function to add class to the element 
// let addClasstoElement = (selector, className) =>{
//     selector.classList.add(className);
// };

// // a function to put data from the form + create a node element and append it
// let createRecord = ({getJournalHead, getJournalAmount, getJournalHeadDescription, appendToWhere}) =>{
//     let element = document.createElement('div');
//     addClasstoElement(element, "container");
//     addClasstoElement(element, "record-container__container");
//     addClasstoElement(element, "d-flex");
//     addClasstoElement(element, "mt-2");
//     element.innerHTML =`
//     <div class="item-container w-75 record-container__journalHeader">${getJournalHead}</div>
//     <div class="item-container w-25 record-container__money">${getJournalAmount}</div>
//     `;
//     document.querySelector(appendToWhere).appendChild(element);
// };
// // createRecord({getJournalHead: "some journal Head", getJournalAmount: "200"});


// // get data when someone clicks the button
// let getDataBtnInit = document.querySelectorAll(".get-data-btn");
// let getDataBtn;
// for (let counter = 0; counter < getDataBtnInit.length; counter++) {
//     getDataBtn = getDataBtnInit[counter];

//     getDataBtn.addEventListener("click", (event) => {

//         let eventTextContent = event.target.textContent;
//         console.log(typeof eventTextContent);

//         //get data
//         journalHead = document.querySelector(".journal-head").value;
//         journalAmount = document.querySelector(".journal-amount").value;
//         journalDescription = document.querySelector(".journal-details").value;

//         // taking income and expense decision
//         if (eventTextContent === "Income") {
//             // using those data in createRecord function 
//             createRecord({getJournalHead: journalHead, getJournalAmount: journalAmount, getJournalHeadDescription: journalDescription, appendToWhere: ".income-category-journal"});
//         } else if (eventTextContent === "Expense") {
//             createRecord({getJournalHead: journalHead, getJournalAmount: journalAmount, getJournalHeadDescription: journalDescription, appendToWhere: ".expense-category-journal"});
//         } else {
//             return;
//         }
//     });
// }



// Object based data storing and fetching

// get data when user click on the income or expense button
let JOURNAL_HEAD;
let JOURNAL_AMOUNT;
let JOURNAL_DATE = new Date().toDateString();
let JOURNAL_DESCRIPTION;
let OBJ_DATA=[];
let ID_COUNTER =0;

// function that gets data from form
const Get_data = () =>{
    JOURNAL_HEAD = document.querySelector(".journal-head").value;
    JOURNAL_AMOUNT = document.querySelector(".journal-amount").value;
    JOURNAL_DESCRIPTION = document.querySelector(".journal-details");
};

const Create_Data_Object = () =>{
    let testObject = {
        "journalHead": JOURNAL_HEAD,
        "journalAmount": JOURNAL_AMOUNT,
        "journalDescription": JOURNAL_DESCRIPTION
    }
    OBJ_DATA.push(testObject);
    console.log(OBJ_DATA);

}


//the click event get data from form and that data is available 
let selector =document.querySelectorAll(".get-data-btn");
for(let counter = 0; counter < selector.length; counter++){
    let GET_DATA_BTN = selector[counter];
    GET_DATA_BTN.addEventListener("click", ()=>{
        Get_data();
        Create_Data_Object();
    });
}
const fs= require("fs");

