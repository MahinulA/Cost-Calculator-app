let journalHead;
let journalAmount;
let journalDescription;

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
            console.log(`income`);

        } else if (eventTextContent === "Expense") {
            console.log(`expense`);
        } else {
            return;
        }
    });



}
