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