const LS_key = "feedback-form-state";
const form = document.querySelector(".feedback-form");

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", onTextInput);

populateTextarea();

function handleSubmit(event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (email && message) {
        console.log({"email": email, "message": message});
        event.currentTarget.reset();
        localStorage.removeItem(LS_key);
    } else {
        alert("All fields must be filled");
    }
}

function onTextInput() {
    const object = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    }
    localStorage.setItem(LS_key, JSON.stringify(object));
}

function populateTextarea() {
    const storage = JSON.parse(localStorage.getItem(LS_key));
    if (storage) {
        const savedEmail = storage.email;
        const savedMessage = storage.message;

        if (savedEmail || savedMessage) {
            form.elements.email.value = savedEmail;
            form.elements.message.value = savedMessage;
        } 
    }
}
