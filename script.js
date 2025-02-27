document.addEventListener('DOMContentLoaded', function () {
    const accessibilityBar = document.querySelector('.accessibility-bar');
  
    document.addEventListener('mousemove', function (event) {
      if (event.clientY < 50) 
      { 
        accessibilityBar.classList.add('visible');
      } 
      else 
      {
        accessibilityBar.classList.remove('visible');
      }
    });
  
    document.addEventListener('mouseout', function (event) {
      if (event.clientY > 50) 
      {
        accessibilityBar.classList.remove('visible');
      }
    });
  
    document.getElementById('contrast-toggle').addEventListener('click', function () 
    {
      document.body.classList.toggle('high-contrast');
    });
  
    document.getElementById('text-increase').addEventListener('click', function () 
    {
      document.body.style.fontSize = 'larger';
    });
  
    document.getElementById('text-decrease').addEventListener('click', function () 
    {
      document.body.style.fontSize = 'smaller';
    });
  
    document.getElementById('dark-mode-toggle').addEventListener('click', function () 
    {
      document.body.classList.toggle('dark-mode');
    });
});