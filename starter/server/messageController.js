// const { cachedDataVersionTag } = require("v8")

let chats = [{pin: 123, messages: ['greetings', 'I like dogs']}]

module.exports = {
    createMessage:(req, res) => {
        const {pin, message} = req.body
        console.log(pin, message, chats)
        for (let i = 0; i < chats.length; i++) {
            console.log(pin, message, chats)
            if(chats[i].pin === +pin){
                chats[i].messages.push(message)
                res.status(200).send(chats[i])
                return
            }
        }
        const newChat = {
            pin: +pin,
            messages: [message]
        }
        chats.push(newChat)

        res.status(200).send(newChat)
    }
};
