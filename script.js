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
	function randomMsg(currentHello) {
		// Get random message
		let random = Math.floor(Math.random() * helloMessages.length);

		if (random == currentHello) {
			randomMsg(currentHello);
		} else {
			return currentHello = random;
		}
	};

	setInterval(() => {

		// Add class to animate welcome message
		$(".welcome").addClass("hide");

		setTimeout(() => {
			$(".welcome").text(helloMessages[randomMsg()]);
			$(".welcome").removeClass("hide");
		}, 500);
	}, 5000);
});