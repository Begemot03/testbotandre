const { Markup } = require('telegraf');

const keyboard_start = Markup.keyboard(['Начать']);
exports.keyboard_start = keyboard_start;

const keyboard_conduction = Markup.keyboard([
    ['Какие вопросы, ты шо...',
    'Ну задавай раз хочешь 😒'],
]);
exports.keyboard_conduction = keyboard_conduction;

const keyboard_answer1 = Markup.keyboard([
    'Изменяет... 😢😔',
    'Наверное делает депиляцию... 😧😮😦',
])
exports.keyboard_answer1 = keyboard_answer1;

const keyboard_answer2 = Markup.keyboard([
    ['Глаза ✨✨✨'],
    ['Тити 👉👈',
    'Попу 🍑',]
])
exports.keyboard_answer2 = keyboard_answer2;

const keyboard_answer3 = Markup.keyboard([
    'Сонечка ❤️',
    'София',
])
exports.keyboard_answer3 = keyboard_answer3;

const keyboard_answer4 = Markup.keyboard([
    'Присоединюсь 😁',
    'Подам на развод 😭',
])
exports.keyboard_answer4 = keyboard_answer4;

const keyboard_answer5 = Markup.keyboard([
    'Открывай',
    'Не нада нам такого 😐',
])
exports.keyboard_answer5 = keyboard_answer5;

const keyboard_answer6 = Markup.keyboard([
    'Отдыхай, любимый, 😌',
])
exports.keyboard_answer6 = keyboard_answer6;