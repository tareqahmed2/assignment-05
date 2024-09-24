const initialMoneyElementForCard3 = document.getElementById("initial-money");

const input3 = document.getElementById("donation-input3");

const donationButton3 = document.getElementById("donation-button3");

donationButton3.addEventListener("click", function () {
  let initialMoney = parseFloat(
    document.getElementById("initial-money").innerText
  );
  let initialTotalMoney3 = parseFloat(
    document.getElementById("total-donation-money3").innerText
  );

  const inputValue3 = parseFloat(
    document.getElementById("donation-input3").value
  );
  // need to implement
  if (
    isNaN(inputValue3) ||
    inputValue3 < 0 ||
    initialMoney <= 0 ||
    inputValue3 > initialMoney
  ) {
    alert("Invalid Input");
    return;
  } else {
    const newInitialMoney = initialMoney - inputValue3;
    const newTotalMoney = initialTotalMoney3 + inputValue3;
    initialMoneyElement.innerText = `${newInitialMoney} BDT`;
    document.getElementById(
      "total-donation-money3"
    ).innerText = `${newTotalMoney} BDT`;
    document.getElementById("my_modal_3").showModal();
    const innerTextOfDonationTitle =
      document.getElementById("donation-title3").innerText;
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
      hour13: false,
    };

    newEntry.innerHTML = `
     <div class="w-11/12 mx-auto shadow-2xl p-8 rounded-md mb-4">
      <p>${inputValue3} ${innerTextOfDonationTitle}</p>
      <p>Date: ${currentDateTime}</p>
      </div>`;
    transitionHistory.appendChild(newEntry);
  }
});
