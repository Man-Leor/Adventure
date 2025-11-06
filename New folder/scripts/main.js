// ...existing code...
document.addEventListener('DOMContentLoaded', function(){
  // fill year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // mobile menu toggle
  const menuBtn = document.querySelector('.mobile-menu');
  const nav = document.querySelector('.nav');
  if(menuBtn && nav){
    menuBtn.addEventListener('click', ()=> {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // simple form submit (placeholder)
  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Thanks — your request has been received. We will respond within 48 hours.');
      form.reset();
    });
  }
});
// ...existing code...