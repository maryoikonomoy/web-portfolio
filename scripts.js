document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const typingElement = document.getElementById("typing-text");
    const text = "I make pixels pretty and code behave... most of the time";
    let index = 0;

    // title
    title.style.opacity = "0";
    title.style.transform = "translateY(-50px)";

    setTimeout(() => {
        title.style.transition = "all 1.5s ease";
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
    }, 500);

    // Typing effect 
    function type() {
        if (index < text.length) {
            typingElement.innerHTML += text[index];
            index++;
            setTimeout(type, 80); 
        }
    }

    type(); 
});
