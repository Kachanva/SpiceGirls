const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  // Toggle (переключатель): если класса нет — добавит, если есть — уберет
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});     

document.addEventListener('click', (event) => {
  const menu = document.getElementById('nav-menu');
  const btn = document.getElementById('hamburger');
  
  // Проверяем: был ли клик ВНЕ меню И ВНЕ кнопки гамбургера
  // .contains проверяет, находится ли элемент внутри другого
  if (!menu.contains(event.target) && !btn.contains(event.target)) {
    menu.classList.remove('active');
    btn.classList.remove('active');
  }
});