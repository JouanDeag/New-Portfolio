$(document).ready(function () {
  // Set possible hello messages
  let helloMessages = [
    'Hello!',
    'Hey!',
    'Howdy!',
    'Greetings!',
    'Salutations!',
    'Ciao!',
    'Bonjour!',
    'Hola!',
    'Aloha!',
    'Namaste!',
    'Shalom!',
    'Salaam!',
    'Konnichiwa!',
    'Nǐ hǎo!',
    'Hej!',
    'Hallå!',
    'Hallo!',
  ];

  let currentHello: number = 0;
  function randomMsg(currentHello: number = 0): number {
    // Get random message
    let random: number = Math.floor(Math.random() * helloMessages.length);

    // Make sure the message is different from the last one
    if (random == currentHello) {
      return randomMsg(currentHello);
    } else {
      return (currentHello = random);
    }
  }

  setInterval(() => {
    // Add class to animate fading welcome message
    $('.welcome').addClass('hide');

    // Change welcome message
    setTimeout(() => {
      $('.welcome').text(helloMessages[randomMsg()]);
      $('.welcome').removeClass('hide');
    }, 500);
  }, 5000);

  $('#sendEmail').click(function (e) {
    e.preventDefault();

    // Get values from form
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();

    // Check if all fields are filled
    if (name == '' || email == '' || message == '') {
      $('#error').text('Please fill out all fields');
      return;
    }

    //	If everything is good, set the error to none, set the sender to the name and reset the message form
    $('#error').text('');
    $('#sender').text(`${name}`);
    $('#message').val('');

    const notification = $('.notification');

    // Change position to animate notification in and out after 2 seconds
    notification.css({ left: '30px' });
    setTimeout(() => {
      notification.css({ left: '-500px' });
    }, 2000);
  });
});
