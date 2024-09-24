const initialMoneyElementForCard2 = document.getElementById("initial-money");

const input2 = document.getElementById("donation-input2");

const donationButton2 = document.getElementById("donation-button2");

donationButton2.addEventListener("click", function () {
  let initialMoney = parseFloat(
    document.getElementById("initial-money").innerText
  );
  let initialTotalMoney2 = parseFloat(
    document.getElementById("total-donation-money2").innerText
  );

  const inputValue2 = parseFloat(
    document.getElementById("donation-input2").value
  );
  // need to implement
  if (
    isNaN(inputValue2) ||
    inputValue2 < 0 ||
    initialMoney <= 0 ||
    inputValue2 > initialMoney
  ) {
    alert("Invalid Input");
    return;
  } else {
    alert(`you are going to donate ${inputValue2} tk`);
    const newInitialMoney = initialMoney - inputValue2;
    const newTotalMoney = initialTotalMoney2 + inputValue2;
    initialMoneyElement.innerText = `${newInitialMoney} BDT`;
    document.getElementById(
      "total-donation-money2"
    ).innerText = `${newTotalMoney} BDT`;
    document.getElementById("my_modal_2").showModal();
    const innerTextOfDonationTitle =
      document.getElementById("donation-title2").innerText;
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
      <p>${inputValue2} tk ${innerTextOfDonationTitle}</p>
      <p>Date: ${currentDateTime}</p>
      </div>`;
    transitionHistory.appendChild(newEntry);
  }
});
