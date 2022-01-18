const {Telegraf, session, Scenes, Markup } = require('telegraf');
const { greetingScene,
    question_1,
    question_2, 
    question_3,
    question_4,
    question_5,
    question_6,
} = require('./handlers');
const { keyboard_start } = require('./keyboards');

const TOKEN = '5060864741:AAHcgRUs-3W7k8c7Yq_Pop9R0k4TCiJ-usc';

const bot = new Telegraf(TOKEN);


const roleScene = new Scenes.WizardScene('roleScene', 
    greetingScene, 
    question_1,
    question_2,
    question_3,
    question_4,
    question_5,
    question_6,
);

const stage = new Scenes.Stage([roleScene]);

roleScene.enter(ctx => ctx.reply('Милая, это для тебя 🥺', keyboard_start)); // Вход в сцену
roleScene.leave(async (ctx) => {
    await ctx.reply('Любимая, я очень рад, что ты посмотрела чего я сделал, я надеюсь тебе понравилось 🥺👉👈');
    ctx.reply('😏');
    ctx.reply('❤️');
    ctx.reply('🥺');
    return ctx.reply('😘', Markup.removeKeyboard());
});

  
bot.use(session());
bot.use(stage.middleware());
bot.start(ctx => ctx.scene.enter('roleScene'));

bot.launch();

//agile-taiga-04682
//https://agile-taiga-04682.herokuapp.com/
//https://git.heroku.com/agile-taiga-04682.git
