document.addEventListener("DOMContentLoaded", () => {
    let vantaEffect = null;

    function initVanta() {
        // Проверяем текущую тему
        const isLight = document.body.classList.contains("light-theme");

        if (!vantaEffect) {
            // Создаём эффект Vanta.js только один раз
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
                backgroundColor: isLight ? 0x98a283 : 0x21212f, // Бежевый в светлой, тёмно-синий в темной
            });
        } else {
            // Обновляем цвета, если анимация уже запущена
            vantaEffect.setOptions({
                color: isLight ? 0xe1d143 : 0x843854,
                backgroundColor: isLight ? 0x98a283 : 0x21212f,
            });
        }
    }

    // Проверяем, есть ли кнопка
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

            // Перезапускаем анимацию
            initVanta();
        });
    } else {
        console.error("Ошибка: Кнопка переключения темы не найдена!");
    }

    // Проверяем сохранённую тему
    if (localStorage.getItem("theme") === "light-theme") {
        document.body.classList.add("light-theme");
    }

    initVanta(); // Запускаем анимацию
});