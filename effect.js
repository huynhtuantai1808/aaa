$(window).on('load', function() {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function() {
    const vw = $(window).width() / 2;

    function adjustBalloonsPosition() {
        const offsets = [-350, -250, -150, -50, 50, 150, 250, 350];
        offsets.forEach((offset, index) => {
            $(`#b${index + 1}`).stop().animate({ top: 240, left: vw + offset }, 500);
        });
    }

    $(window).resize(adjustBalloonsPosition);

    $('#turn_on').click(function() {
        ['yellow', 'red', 'blue', 'green', 'pink', 'orange'].forEach(color => {
            $(`#bulb_${color}`).addClass(`bulb-glow-${color}`);
        });
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(() => {
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function() {
        const audio = $('.song')[0];
        audio.play();
        $('#image_effect').fadeIn('slow'); // Show image for animation
        $(this).fadeOut('slow').delay(6000).promise().done(() => {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function() {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(() => {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function createBalloonLoop(balloonId) {
        function loop() {
            const randLeft = 1000 * Math.random();
            const randTop = 500 * Math.random();
            $(balloonId).animate({ left: randLeft, bottom: randTop }, 10000, loop); // Thời gian chuyển đổi là 10 giây
        }
        loop();
    }

    $('#balloons_flying').click(function() {
        $('.balloon-border').animate({ top: -500 }, 8000);
        ['#b1', '#b4', '#b5', '#b7'].forEach(id => $(id).addClass('balloons-rotate-behaviour-one'));
        ['#b2', '#b3', '#b6', '#b8'].forEach(id => $(id).addClass('balloons-rotate-behaviour-two'));
        for (let i = 1; i <= 8; i++) createBalloonLoop(`#b${i}`);
        $(this).fadeOut('slow').delay(5000).promise().done(() => {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function() {
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(() => {
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function() {
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(() => {
            $('#wish_message').fadeIn('slow');
        });
    });

    $('#wish_message').click(function() {
        adjustBalloonsPosition();
        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(3000).promise().done(() => {
            $('#story').fadeIn('slow');
        });
    });

    $('#story').click(function() {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(() => {
            $('.message').fadeIn('slow');
        });
		function showNextMessage() {
			if (currentMessageIndex < messages.length) {
				const messageElement = document.getElementById('message');
				messageElement.innerText = messages[currentMessageIndex];
				messageElement.style.opacity = 1;
				currentMessageIndex++;
				setTimeout(() => {
					messageElement.style.opacity = 0;
					setTimeout(showNextMessage, 1000); // Thời gian giữa các dòng
				}, 3000); // Thời gian hiển thị mỗi dòng
			}
		}
		
		window.onload = showNextMessage;

        function msgLoop(i) {
            $(`p:nth-child(${i})`).fadeOut('slow').delay(800).promise().done(() => {
                i++;
                $(`p:nth-child(${i})`).fadeIn('slow').delay(1000);
                if (i === 50) {
                    $(`p:nth-child(49)`).fadeOut('slow').promise().done(() => {
                        $('.cake').fadeIn('fast');
                    });
                } else {
                    msgLoop(i);
                }
            });
        }
        msgLoop(0);
    });
});