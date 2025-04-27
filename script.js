// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Select the button element
    const button = document.querySelector("button");

    // Add a click event listener to the button
    button.addEventListener("click", () => {
        alert("Button was clicked!");
    });
});