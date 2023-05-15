
function saveHealthAnswersToLocalStorage() {
    let radioAnswers = []
    const skydivingOrNot = document.querySelectorAll('input[name="skydivingOrNot"]');
    let skydivingCheckedOption = '';
    for (option of skydivingOrNot){
        if(option.checked){
          skydivingCheckedOption = option.value;
        }
      } 
    const happyOrNot = document.querySelectorAll('input[name="happyOrNot"]');
    let happyCheckedOption = '';
    for (option of happyOrNot){
        if(option.checked){
          happyCheckedOption = option.value;
        }
      } 
    const moneyOrNot = document.querySelectorAll('input[name="moneyOrNot"]');
    let moneyCheckedOption = '';
    for (option of moneyOrNot){
        if(option.checked){
          moneyCheckedOption = option.value;
        }
      } 
    radioAnswers.push(skydivingCheckedOption,happyCheckedOption,moneyCheckedOption);
    localStorage.setItem("healthPageAnswers", JSON.stringify(radioAnswers))
}

