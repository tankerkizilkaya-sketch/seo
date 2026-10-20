document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('leadForm');
  const status = document.querySelector('.form-status');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const name = (formData.get('name') || '').toString().trim();

      if (status) {
        status.textContent = name
          ? `Teşekkürler ${name}! Talepleriniz için ekibimiz en kısa sürede dönüş yapacak.`
          : 'Teşekkürler! Talepleriniz için ekibimiz en kısa sürede dönüş yapacak.';
      }

      form.reset();
    });
  }
});
