         // // iPhone mobile minus event
      const minusButton = document.getElementById('minusButton');
      minusButton.addEventListener('click', function () {
        const  iPhoneValue = document.getElementById('iPhoneValue').value;
        const iPhoneValueNumber = parseFloat(iPhoneValue);
        if (iPhoneValueNumber > 1) {
         const totalIPhoneValueNumber = iPhoneValueNumber - 1;
         document.getElementById('iPhoneValue').value = totalIPhoneValueNumber;

         const IPhonePrice = document.getElementById('IPhonePrice').innerText;
         const IPhonePriceNumber = parseFloat(IPhonePrice);
         const totalIPhonePriceNumber = IPhonePriceNumber - 1219;
         document.getElementById('IPhonePrice').innerText =  totalIPhonePriceNumber ;

         const subTotalPrice = document.getElementById('subTotalPrice').innerText;
         const subTotalPriceNumber = parseFloat(subTotalPrice);
         const totalSubTotalPriceNumber = subTotalPriceNumber - 1219;
         document.getElementById('subTotalPrice').innerText = totalSubTotalPriceNumber ;

         const taxBtn = document.getElementById('tax').innerText;
         const taxBtnNumber = parseFloat(taxBtn);
         const totalTaxBtnNumber = taxBtnNumber - 10;
         document.getElementById('tax').innerText = totalTaxBtnNumber;

         const totalBtn = document.getElementById('total').innerText;
         const totalBtnNumber = parseFloat(totalBtn);
         const allTotalBtnNumber = totalBtnNumber - 1229;
         document.getElementById('total').innerText = allTotalBtnNumber;
        }
      })

      // iPhone mobile plus event

      const plusButton = document.getElementById('plusButton');
      plusButton.addEventListener('click', function () {
         const iPhoneValueBtn = document.getElementById('iPhoneValue').value;
         const iPhoneValueNumber = parseFloat(iPhoneValueBtn);
         const totalIPhoneValueNumber = iPhoneValueNumber + 1;
         document.getElementById('iPhoneValue').value = totalIPhoneValueNumber ;

         const IPhonePrice = document.getElementById('IPhonePrice').innerText;
         const IPhonePriceNumber = parseFloat(IPhonePrice);
         const totalIPhonePriceNumber = totalIPhoneValueNumber * 1219 ;
         document.getElementById('IPhonePrice').innerText =  totalIPhonePriceNumber ;

         const subTotalPrice = document.getElementById('subTotalPrice').innerText;
         const subTotalPriceNumber = parseFloat(subTotalPrice);
         const totalSubTotalPriceNumber = totalIPhonePriceNumber ;
         document.getElementById('subTotalPrice').innerText = totalSubTotalPriceNumber ;

         const taxBtn = document.getElementById('tax').innerText;
         const taxBtnNumber = parseFloat(taxBtn);
         const totalTaxBtnNumber = taxBtnNumber + 10 ;
         document.getElementById('tax').innerText = totalTaxBtnNumber;

         const totalBtn = document.getElementById('total').innerText;
         const totalBtnNumber = parseFloat(totalBtn);
         const allTotalBtnNumber = totalSubTotalPriceNumber + totalTaxBtnNumber ;
         document.getElementById('total').innerText = allTotalBtnNumber;
        
      })

      // // iPhone mobile case minus event

      const CaseMinusButton = document.getElementById('CaseMinusButton');
      CaseMinusButton.addEventListener('click', function () {
         const CaseIPhoneValue = document.getElementById('CaseIPhoneValue').value;
         const CaseIPhoneValueNumber = parseFloat(CaseIPhoneValue);
         if(CaseIPhoneValueNumber > 1){
            const totalCaseIPhoneValueNumber = CaseIPhoneValueNumber - 1 ;
            document.getElementById('CaseIPhoneValue').value = totalCaseIPhoneValueNumber ;

            const casePrice = document.getElementById('casePrice').innerText;
            const casePriceNumber = parseFloat(casePrice);
            const totalCasePriceNumber = totalCaseIPhoneValueNumber * 59 ;
            document.getElementById('casePrice').innerText =  totalCasePriceNumber;

            const subTotalPrice = document.getElementById('subTotalPrice').innerText;
            const subTotalPriceNumber = parseFloat(subTotalPrice);
            const totalSubTotalPriceNumber = totalCasePriceNumber + caseSubTotalPriceNumber;
            document.getElementById('subTotalPrice').innerText = totalSubTotalPriceNumber ;

            const taxBtn = document.getElementById('tax').innerText;
            const taxBtnNumber = parseFloat(taxBtn);
            const totalTaxBtnNumber = taxBtnNumber - 3;
            document.getElementById('tax').innerText = totalTaxBtnNumber;

            const totalBtn = document.getElementById('total').innerText;
            const totalBtnNumber = parseFloat(totalBtn);
            const allTotalBtnNumber = totalBtnNumber - 59;
            document.getElementById('total').innerText = allTotalBtnNumber;
         }
      })

      // // iPhone mobile case plus event

      const CasePlusButton = document.getElementById('CasePlusButton');
      CasePlusButton.addEventListener('click', function () {
         const CaseIPhoneValue = document.getElementById('CaseIPhoneValue').value;
         const CaseIPhoneValueNumber = parseFloat(CaseIPhoneValue);
         const totalCaseIPhoneValueNumber = CaseIPhoneValueNumber + 1;
         document.getElementById('CaseIPhoneValue').value = totalCaseIPhoneValueNumber;
     
         const casePrice = document.getElementById('casePrice').innerText;
         const casePriceNumber = parseFloat(casePrice);
         const totalCasePriceNumber = totalCaseIPhoneValueNumber * 59 ;
         document.getElementById('casePrice').innerText =  totalCasePriceNumber;
         
         const caseSubTotalPrice = document.getElementById('subTotalPrice').innerText;
         const caseSubTotalPriceNumber = parseFloat(caseSubTotalPrice);
         const totalCaseSubTotalPriceNumber = totalCasePriceNumber + caseSubTotalPriceNumber;
         document.getElementById('subTotalPrice').innerText = totalCaseSubTotalPriceNumber;

         const caseTaxBtn = document.getElementById('tax').innerText;
         const caseTaxBtnNumber = parseFloat(caseTaxBtn);
         const totalCaseTaxBtnNumber = caseTaxBtnNumber + 3 ;
         document.getElementById('tax').innerText = totalCaseTaxBtnNumber;
         
         const caseTotalBtn = document.getElementById('total').innerText;
         const caseTotalBtnNumber = parseFloat(caseTotalBtn);
         const caseAllTotalBtnNumber = totalCaseSubTotalPriceNumber + totalCaseTaxBtnNumber ;
         document.getElementById('total').innerText = caseAllTotalBtnNumber;
      })