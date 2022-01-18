const { Telegraf, Markup} = require('telegraf');
const { keyboard_conduction, 
    keyboard_answer1, 
    keyboard_answer2,
    keyboard_answer3,
    keyboard_answer4,
    keyboard_answer5,
    keyboard_answer6,
} = require('./keyboards');


const greetingScene = Telegraf.on('text', async (ctx) => {
    await ctx.reply('Любимая, тебя ждут твои любимые вопросики 🥰', keyboard_conduction);
    return ctx.wizard.next();
})
exports.greetingScene = greetingScene;

const question_1 = Telegraf.on('text', async (ctx) => {
    await ctx.reply('Так, надеюсь, ты просекла фишку, поэтому пожалуй начнем 😅', Markup.removeKeyboard());
    ctx.replyWithHTML(
`<i><b>Событие 1.</b></i> 
Любимая, вот представим мы муж и жена, я прихожу с работы и слыши стоны, что я подумаю?
`, keyboard_answer1);
    
    return ctx.wizard.next();
});
exports.question_1 = question_1;

const question_2 = Telegraf.on('text', async (ctx) => {
    if(ctx.message.text == 'Изменяет... 😢😔') {
        await ctx.reply('Ты чё 😒. Я вообще-то тебе доверяю.', Markup.removeKeyboard());
    } else if(ctx.message.text == 'Наверное делает депиляцию... 😧😮😦') {
        await ctx.reply('Короче а чего мне делать если так? Ты же будешь смущаться надеюсь.', Markup.removeKeyboard());
    }
    
    ctx.replyWithHTML(
`<i><b>Событие 2.</b></i> 
Сонь, а угадай, какую часть тела я в тебе больше всего люблю.
`, keyboard_answer2);
    
    return ctx.wizard.next();
});
exports.question_2 = question_2;

const question_3 = Telegraf.on('text', async (ctx) => {
    if(ctx.message.text == 'Глаза ✨✨✨') {
        await ctx.reply('Любимая, я в тебе абсолютно всё люблю, а в глаза твои можно смотреть бесконечно ❤️💖', Markup.removeKeyboard());
    } else if(ctx.message.text == 'Тити 👉👈') {
        await ctx.reply('Тити, конечно хорошо, но не главное, ты прекрасна всегда, малышка 💞💗', Markup.removeKeyboard());
    } else if(ctx.message.text == 'Попу 🍑') {
        await ctx.reply('Так, а тут начинается секас, но, Сонечка, ты вся иедальна 💝💖', Markup.removeKeyboard());
    }
    
    ctx.replyWithHTML(
`<i><b>Событие 3.</b></i> 
Любимая, а теперь тебе придется кое-что вспомнить. Ты помнишь как я тебя записал в телефоне в первый раз 🤔
`, keyboard_answer3);
    
    return ctx.wizard.next();
});
exports.question_3 = question_3;

const question_4 = Telegraf.on('text', async (ctx) => {
    if(ctx.message.text == 'Сонечка ❤️') {
        await ctx.reply('Дорогая, я в тебе не сомневался 😌', Markup.removeKeyboard());
    } else if(ctx.message.text == 'София') {
        await ctx.reply('Ты черт мелкий, еще что скажешь, я вообще-то в тебе не сомневался 🥺 А ты...', Markup.removeKeyboard());
    }
    
    ctx.replyWithHTML(
`<i><b>Событие 4.</b></i> 
Сонь, а ты помнишь первую ситуацию? Так, в общем, усложняем её. Захожу я в комнату, а там ты с красивой подругой тырыпыхаешься 😶. Что я сделаю...
`, keyboard_answer4);
    
    return ctx.wizard.next();
});
exports.question_4 = question_4;

const question_5 = Telegraf.on('text', async (ctx) => {
    if(ctx.message.text == 'Присоединюсь 😁') {
        await ctx.reply('Так, ты только не ругайся, конечно я бы просто поругался бы, но просто для приличия такой ответ 👉👈', Markup.removeKeyboard());
    } else if(ctx.message.text == 'Подам на развод 😭') {
        await ctx.reply('По шее ты получишь. Конечно, такого быть не может, но...', Markup.removeKeyboard());
    }
    
    ctx.replyWithHTML(
`<i><b>Событие 5.</b></i> 
Так а тут закрытая коробочка. Открыть?
`, keyboard_answer5);
    
    return ctx.wizard.next();
});
exports.question_5 = question_5;

const question_6 = Telegraf.on('text', async (ctx) => {
    if(ctx.message.text == 'Открывай') {
        ctx.reply('А это мы такие красивенькие 🥺👉👈', Markup.removeKeyboard());
        ctx.replyWithPhoto('https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/272026197_1430822150647577_3688642184295261837_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=RUvczaNbAvcAX8YprND&_nc_oc=AQnJ8M4ePrseWLqE5vY-eD-kersPQ-0ci046yrjXJo0cYNysmBwQU1omkt4hOj96bPU&_nc_ht=scontent-arn2-1.xx&oh=00_AT_fOsXZIPGHJW6qPF8zYHKSqek6dRsLIOhuS7UODOH4Ww&oe=61EB1812');
    } else if(ctx.message.text == 'Не нада нам такого 😐') {
        await ctx.reply('Ты чего не открыла 😒, а там вообще-то это...', Markup.removeKeyboard());
        ctx.replyWithPhoto('https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/272026197_1430822150647577_3688642184295261837_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=RUvczaNbAvcAX8YprND&_nc_oc=AQnJ8M4ePrseWLqE5vY-eD-kersPQ-0ci046yrjXJo0cYNysmBwQU1omkt4hOj96bPU&_nc_ht=scontent-arn2-1.xx&oh=00_AT_fOsXZIPGHJW6qPF8zYHKSqek6dRsLIOhuS7UODOH4Ww&oe=61EB1812');
    }
    
    ctx.replyWithHTML(
`<i><b>Событие 7.</b></i> 
Любимая 🥺 Я тут очень устал, поэтому закончу на этом. Ты у меня самая лучшая и я тебя очень сильно люблю ❤️
`, keyboard_answer6);
    
    return ctx.wizard.next();
});
exports.question_6 = question_6;