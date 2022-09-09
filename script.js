$(document).ready(function () {

    // Set possible hello messages
    var helloMessages = [
        "Hello!",
        "Hey!",
        "Howdy!",
        "Greetings!",
        "Salutations!",
        "Ciao!",
        "Bonjour!",
        "Hola!",
        "Aloha!",
        "Namaste!",
        "Shalom!",
        "Salaam!",
        "Konnichiwa!",
        "Nǐ hǎo!",
        "Hej!",
        "Hallå!",
        "Hallo!"
    ];

    currentHello = 0;
    // Add class to animate welcome message
    function randomMsg(currentHello) {
        // Get random message
        let random = Math.floor(Math.random() * helloMessages.length);
        // Make sure it's not the same as the current message
        if (random == currentHello) {
            randomMsg(currentHello);
        } else {
            return currentHello = random;
        }
    };

    setInterval(() => {
        $(".welcome").addClass("hide");
        setTimeout(() => {
            $(".welcome").text(helloMessages[randomMsg()]);
            $(".welcome").removeClass("hide");
        }, 500);


    }, 5000);
});