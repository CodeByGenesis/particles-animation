const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


class Particle {
  constructor() {

    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

 
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    };

    this.size = Math.random() * 5 + 1;
  }


  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

   
    if (this.x < 0 || this.x > canvas.width) this.velocity.x *= -1;
    if (this.y < 0 || this.y > canvas.height) this.velocity.y *= -1;
  }


  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}


const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push(new Particle());
}


function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

 
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });
}

animate();
