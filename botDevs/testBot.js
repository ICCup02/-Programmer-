const Discord = require('discord.js')
const discordClient = new Discord.Client()
let config = require('./botcfg.json')
let commandSign = config.commandSign


discordClient.on('ready', async () => {
    console.log(`Logged in as ${discordClient.user.tag}!`)
});

discordClient.on('message', msg => {
    let firstNumber = undefined
    let twoNumber= undefined
    if (!msg.guild) return
    if (msg.mentions.everyone) return
    if (msg.author.bot) return
console.log(msg.content)
    if ((msg.content[0] === config.commandSign)&&(msg.content[1] === 's')&&(msg.content[2] === 'u')&&(msg.content[3] === 'm')&&(msg.content[4] === 'm')) {
        for (findNumber in msg.content) {
            if (msg.content[findNumber] === '(')
                twoNumber = findNumber
            if (msg.content[findNumber] === '+') {
                firstNumber = msg.content.substring(parseInt(twoNumber,10) + 1, findNumber)
                twoNumber = findNumber
                continue
            }
            if (firstNumber !== undefined) {
                twoNumber = msg.content.substring(parseInt(twoNumber,10) + 1, msg.content.length - 1)
                console.log('twoNumber : ', twoNumber)
                break
            }

        }
    }

    msg.reply(parseInt(firstNumber)+parseInt(twoNumber))

})

discordClient.login(config.botToken)




