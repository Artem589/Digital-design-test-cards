# Тестовое задание на стажировку в Digital Design
Входное задание
Необходимо разработать веб страницу с использованием HTML5/CSS/Javascript, которая будет содержать набор карточек "товаров", разбитых по категориям. Информация внутри карточек может быть любой.

Страница должна содержать:

1. закрепленное сверху меню с названиями категорий (не менее 3-х). 
При прокрутке страницы меню остается на месте (всегда видно в верхней части экрана). 
При клике на название категории осуществляется переход к ней на странице

2. закрепленная кнопка для возврата наверх страницы (отображается только после прокрутки) расположена в правом нижнем углу экрана
3. область для отображения категорий. Каждая категория содержит ее название
4. внутри категорий расположены карточки с "Товарами". Карточка содержит:
     - изображение,
     - подпись к изображению,
     - дату добавления на сайт,
     - кнопку "Купить.
5.  Дата добавления на сайт должна выводиться через функцию, которая преобразует дату в человекочитаемый вид. Результатом функции должен быть форматированный текст: **<день недели>, <номер недели> неделя <месяц> <год> года
    Пример:** getDayInfo(“01.01.2022”) // => Суббота, 1 неделя Января 2022 года
    *getDayInfo(“15.12.2021”) // => Среда, 3 неделя Декабря 2021 года*
6.  по клику на кнопку "Купить", поверх основной страницы появляется форма, в которой будут отображаться:
    - поле ввода для указания количества (целое число больше 0),
     - 3-4 радиобаттона для указания цвета,
     - поле ввода для комментария (можно указать произвольный текст не более 2000 символов),
    - кнопки “Купить” и “Закрыть”
    - Форма делается через тег form. При нажатии на "Купить" отображается сообщение о покупке (например через alert), при нажатии "Закрыть" форма скрывается
7. карточки “товаров” должны переноситься на новую строку, если не умещаются в одной строке, количество в категории от 10 штук (сделать разное количество в категориях)
8. внизу страницы отображаем названия категорий в виде неупорядоченного списка. При клике на название категории осуществляется переход к ней на странице
9. в верхнем меню справа расположить кнопку переключения темы (темная/светлая). При переключении должен изменяться цвет фона и текста
10. при разработке использовать семантические теги (header, h1 и т.д)

Дополнительно можно реализовать:
файлы стилей и скриптов подключать отдельно
адаптивный дизайн (под разную ширину экрана)
анимация переходов
Ограничения:
Запрещается использование любых сторонних библиотек 
(в т.ч. фреймворков Vue/React.js)

































