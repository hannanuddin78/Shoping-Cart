// FIRST WAY TO CREAT WORK
document.getElementById('phone-decrease').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount - 1 ;
    phoneInput.value = phoneNewCount;

    const phoneCountPrice = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = '$' + phoneCountPrice;
 })

 document.getElementById('phone-increase').addEventListener('click', function () {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount + 1 ;
    phoneInput.value = phoneNewCount;

    const phoneCountPrice = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = '$' + phoneCountPrice;
 })

document.getElementById('case-increase').addEventListener('click', function () {
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value)
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;

    const casePrice = caseNewCount * 59;
    document.getElementById('case-total').innerText = '$' + casePrice ;
 })

 document.getElementById('case-decrease').addEventListener('click', function () {
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;

    const casePrice = caseNewCount * 59;
    document.getElementById('case-total').innerText = '$' + casePrice ;
 })
// FINISH FIRST WAY CREAT WORK



// 2ND WAY CREAT WORK
 function handelProductPhoneChange(product, isPhoneIncrease) {
   const phoneInput = document.getElementById(product + '-count');
   const phoneCount = parseInt(phoneInput.value);
   let phoneNewCount = phoneCount;
   if (isPhoneIncrease == true) {
      phoneNewCount = phoneCount + 1;
   }
   if (isPhoneIncrease == false && phoneCount > 0) {
      phoneNewCount = phoneCount - 1;
   }
   phoneInput.value = phoneNewCount;

   const phoneCountPrice = phoneNewCount * 1219;
   document.getElementById(product + '-total').innerText = '$' + phoneCountPrice;
}

function handelProductCaseChange(product, isIncrease) {
   const caseInput = document.getElementById(product + '-count');
   const caseCount = parseInt(caseInput.value);
   let caseNewCount = caseCount;
   if (isIncrease == true) {
      caseNewCount = caseCount + 1;
   }
   if (isIncrease == false && caseCount > 0) {
      caseNewCount = caseCount - 1;
   }
   caseInput.value = caseNewCount;

   const casePrice = caseNewCount * 59;
   document.getElementById(product + '-total').innerText = '$' + casePrice ;
}
// FINISH 2ND WAY CREAT WORK

// 3rd way creat work 
function handelProductChange(product, isIncrease) {
   const productInput = document.getElementById(product + '-count');
   const productCount = parseInt(productInput.value);
   let productNewCount = productCount;
   if (isIncrease == true) {
      productNewCount = productCount + 1;
   }
   if (isIncrease == false && productCount > 0) {
      productNewCount = productCount - 1;
   }
   productInput.value = productNewCount;

   let productPrice = 0;
   if (product == "phone") {
      productPrice = productNewCount * 1219;
   }
   if (product == "case") {
      productPrice = productNewCount * 59;
   }
   document.getElementById(product + '-total').innerText = '$' + productPrice ;
   calculatorTotal();
}

function calculatorTotal() {
   const phoneCount = getInputValue('phone')
   const caseCount = getInputValue('case')

   const subTotalPrice = phoneCount * 1219 + caseCount * 59;
   document.getElementById('subTotalPrice').innerText = '$' + subTotalPrice;

   const tax = (subTotalPrice * 0.1);
   document.getElementById('tax').innerText = '$' + tax;

   const  allTotal = subTotalPrice + tax ;
   document.getElementById('allTotal').innerText = '$' + allTotal;
}

function getInputValue(product) {
   const phoneInput = document.getElementById(product + '-count');
   const phoneCount = parseInt(phoneInput.value);

   const caseInput = document.getElementById(product + '-count');
   const caseCount = parseInt(caseInput.value);
}