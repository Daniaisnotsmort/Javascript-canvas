const canvas = document.getElementById('mycanvas')
const ctx = canvas.getContext('2d')

canvas.width = 1910;
canvas.height = 890;

    const snowflakes = [];
  
  
  function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
   
    snowflakes.forEach((snowflake) => {
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, 2 * Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();
      
      snowflake.y += snowflake.speed;
      
     
      if (snowflake.y > canvas.height + snowflake.radius) {
        snowflake.y = -snowflake.radius;
      }
    });
    
  
    requestAnimationFrame(drawSnow);
  }
  
 
  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1
    });
  }
  
  drawSnow();