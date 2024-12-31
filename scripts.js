
const canvas = document.getElementById("auroraCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const colors = ["rgba(0, 255, 204, 0.2)", "rgba(255, 0, 204, 0.2)", "rgba(0, 153, 255, 0.2)"];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.6;
        this.size = Math.random() * 150 + 50;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 0.5 - 0.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x - this.size > canvas.width || this.x + this.size < 0 || this.y - this.size > canvas.height) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height * 0.6;
            this.size = Math.random() * 150 + 50;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < 30; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

initParticles();
animate();
