
const checkNameInput = () => {
    if (nimet.value == "") {
        nimet.style.borderColor = "red";
    return;
  }
  else{
    return nimet.style.borderColor = "#ced4da";
  }
}

const checkEmailInput = () => {

if (sposti.value == "") {
    sposti.style.borderColor = "red";
    return;
  }
  else{
    return sposti.style.borderColor = "#ced4da";
  }
}
const checkTelInput = () => {
  if (puhnro.value == "") {
    
    puhnro.style.borderColor = "red";
    return;
  }
  else{
    return puhnro.style.borderColor = "#ced4da";
  }
}
const checkMessageInput = () => {
  if (viesti.value == "") {
    viesti.style.borderColor = "red";
    return;
  }
  else{
    return viesti.style.borderColor = "#ced4da";
  }
}
const checkOptInput = () => {
    var checked = document.getElementById("defaultValinta").selected;
    if(checked){
        valinta.style.borderColor = "red";
    }
    else {
    return valinta.style.borderColor = "#ced4da";

    }
  }