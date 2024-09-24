const initialMoneyElement = document.getElementById("initial-money");
const initialTotalMoneyElement = document.getElementById(
  "total-donation-money"
);
const input = document.getElementById("donation-input");
const donationButton = document.getElementById("donation-button");

donationButton.addEventListener("click", function () {
  let initialMoney = parseFloat(
    document.getElementById("initial-money").innerText
  );
  let initialTotalMoney = parseFloat(
    document.getElementById("total-donation-money").innerText
  );

  const inputValue = parseFloat(
    document.getElementById("donation-input").value
  );
  // need to implement
  if (
    isNaN(inputValue) ||
    inputValue < 0 ||
    initialMoney <= 0 ||
    inputValue > initialMoney
  ) {
    alert("Invalid Input");
    return;
  } else {
    alert(`you are going to donate ${inputValue} tk`);
    const newInitialMoney = initialMoney - inputValue;
    const newTotalMoney = initialTotalMoney + inputValue;
    initialMoneyElement.innerText = `${newInitialMoney} BDT`;
    initialTotalMoneyElement.innerText = `${newTotalMoney} BDT`;
    document.getElementById("my_modal_1").showModal();
    const innerTextOfDonationTitle =
      document.getElementById("donation-title").innerText;
    const transitionHistory = document.getElementById("transition-history");
    const newEntry = document.createElement("div");
    const currentDateTime = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Asia/Dhaka",
      hour12: false,
    };
    document.getElementById("transition-title").innerText = "";
    newEntry.innerHTML = `
   <div class="w-11/12 mx-auto shadow-2xl p-8 rounded-md mb-4">
    <p>${inputValue} ${innerTextOfDonationTitle}</p>
    <p>Date: ${currentDateTime}</p>
    </div>`;
    transitionHistory.appendChild(newEntry);
  }
});
