function showAlert(alertId) {
    const bootstrapAlert = document.querySelector("#" + alertId);
    const collapse = new bootstrap.Collapse(bootstrapAlert); 
    collapse.show();
 }
 
 const modalYesBtn = document.querySelector("#contact-modal .btn-primary");
 modalYesBtn.addEventListener("click", function () {    
    console
    const sendBtn = document.querySelector("#send-message-btn");
    sendBtn.style.display = "none";
    showAlert("conf-alert");
 });

 const modalSendButton = document.getElementById("#modal-snd-message");
 modalSendButton.addEventListener("click", function(){
    console.log("button", modalSendButton);
    const confirmMessage = document.getElementById("#send-message-confirm");
    confirmMessage.innerHTML = `<p><strong>ThankYou!</strong> We will contact you soon.</p>`;
    confirmMessage.style.color = green;
 })




