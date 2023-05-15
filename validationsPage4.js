function validationsPageFour(){
    if (validateHappyQuestion() && validateSkydivingQuestion() && validateMoneyQuestion()) {
      return true;
    } else {
      validateSkydivingQuestion()
      validateMoneyQuestion()
      return false;
    }
  }

  function validateHappyQuestion() {
      let checkedOption = '';
      const happyOrNot = document.querySelectorAll('input[name="happyOrNot"]');
      for (option of happyOrNot){
        if(option.checked){
          checkedOption = option.value;
        }
      } 
      if (!checkedOption){
        happyValidation.textContent = "*";
        return false;
      } else {
        happyValidation.textContent = "";
        return true;
      }
  }

  function validateSkydivingQuestion() {
      let checkedOption = '';
      const skydivingOrNot = document.querySelectorAll('input[name="skydivingOrNot"]');
      for (option of skydivingOrNot){
        if(option.checked){
          checkedOption = option.value
        }
      }
      if (!checkedOption){
        skydivingValidation.textContent = "*";
        return false;
      } else {
        skydivingValidation.textContent = "";
        return true;
      } 
  }

  function validateMoneyQuestion() {
      let checkedOption = '';
      const moneyOrNot = document.querySelectorAll('input[name="moneyOrNot"]');
      for (option of moneyOrNot){
        if(option.checked){
          checkedOption = option.value
        }
      } 
      if (!checkedOption){
        moneyValidation.textContent = "*";
        return false;
      } else {
        moneyValidation.textContent = "";
        return true;
      }
  }