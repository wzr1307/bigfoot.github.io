const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Здесь могла бы быть логика сохранения данных, но мы ее опустим
  alert('Регистрация прошла успешно!');
  window.location.href = 'index.html'; // Переход на главную страницу
});
