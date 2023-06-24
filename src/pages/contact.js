// 👉 clear contact form input area when it is focused & let original value appear when unfocused
function ContactPage() {
    const formInputs = document.querySelectorAll(".form_input");
    formInputs.forEach((inputArea) => {
        const originalValue = inputArea.value;

        inputArea.addEventListener("focus", () => {
            if (inputArea.value === originalValue) {
                inputArea.value = "";
            }
        });
        inputArea.addEventListener("blur", () => {
            if (inputArea.value === "") {
                inputArea.value = originalValue;
            }
        });
    });
}

export { ContactPage };
