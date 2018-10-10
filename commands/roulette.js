module.exports.run = async (bot, message, args) => {
    randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    // console.log(randomNumber);
    if(randomNumber==2){
        message.reply("Ai murit! 💀");
    }else{
        message.reply("Ai supravietuit! 😃");
    }
}

module.exports.help = {
  name:"roulette"
}