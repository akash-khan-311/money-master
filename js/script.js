document.getElementById("calculate-btn").addEventListener("click", function () {
  //Total Icome Amount
  const incomeAmount = getInput("income-input");
  //   Food Expense
  const foodCost = getInput("food-input");

  //Home Expense
  const roomRent = getInput("rent-intput");
  //   Clothes Expense
  const clothesCost = getInput("clothes-input");

  //   Total Expense Element
  const TotoalExpenseElement = getElementById("exepensese-value");
  const totalCostExpese = foodCost + roomRent + clothesCost;
  TotoalExpenseElement.innerText = totalCostExpese;
  const totalRemainingBalence = incomeAmount - totalCostExpese;
  const remainingBalence = getElementById("balence");
  remainingBalence.innerText = totalRemainingBalence;
});

document.getElementById("saving-btn").addEventListener("click", function () {
  const totalBalenceField = getElementById("balence");
  const totalBalenceString = totalBalenceField.innerText;
  const totalBalence = parseFloat(totalBalenceString);
  const savingField = getInput("saving");
  const savingAmountString = (totalBalence / savingField).toFixed(2);
  const savingAmount = parseFloat(savingAmountString);

  const savingElement = getElementById("saving-feild");
  savingElement.innerText = savingAmount;

  const remainingTotalBalence = totalBalence - savingAmount;
  const remainingBalenceElement = getElementById("remaining-balance");
  remainingBalenceElement.innerText = remainingTotalBalence;
});
