document.addEventListener("DOMContentLoaded", () => {
  let vantaEffect = null;

  function initVanta() {
      // Определяем, включена ли светлая тема
      const isLight = document.body.classList.contains("light-theme");

      if (!vantaEffect) {
          // Создаём Vanta.js эффект только если он ещё не запущен
          vantaEffect = VANTA.GLOBE({
              el: "#intro",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: isLight ? 0xe1d143 : 0x843854, // Оранжевый в светлой теме, фиолетовый в темной
              backgroundColor: isLight ? 0x98a283 : 0x21212f, // Бежевый в светлой, темно-синий в темной
          });
      } else {
          // Если Vanta.js уже работает, меняем цвета без пересоздания эффекта
          vantaEffect.setOptions({
              color: isLight ? 0xe1d143 : 0x843854,
              backgroundColor: isLight ? 0x98a283 : 0x21212f,
          });
      }

      console.log("Vanta.js обновлен. Тема:", isLight ? "Светлая" : "Темная");
  }

  // Проверяем, есть ли кнопка перед добавлением обработчика событий
  const themeButton = document.getElementById("light-theme-btn");
  
  if (themeButton) {
      themeButton.addEventListener("click", function () {
          document.body.classList.toggle("light-theme");

          // Сохраняем состояние темы
          if (document.body.classList.contains("light-theme")) {
              localStorage.setItem("theme", "light-theme");
          } else {
              localStorage.removeItem("theme");
          }

          // Принудительно обновляем Vanta.js, меняя только цвета
          initVanta();
      });
  } else {
      console.error("Ошибка: Кнопка переключения темы не найдена!");
  }

  // Проверяем, какая тема сохранена в localStorage
  if (localStorage.getItem("theme") === "light-theme") {
      document.body.classList.add("light-theme");
  }

  initVanta(); // Запускаем анимацию при загрузке страницы
});