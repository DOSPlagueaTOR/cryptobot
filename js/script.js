// Slider Init

function SliderInit(Slider, SliderName, CustomPagination = false) {
    Slider.slick({
        vertical: true,
        verticalSwiping: true,
        dots: false,
        slide: '.slide',
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    });
    if (CustomPagination) {
        // Обработчик клика по элементам пагинации
        CustomPagination.find('.pagination-item').on('click', function () {
            Slider.slick('slickGoTo', $(this).index());
        });

        // Обновление активного элемента пагинации при смене слайда
        Slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            CustomPagination.find('.pagination-item').removeClass('active');
            CustomPagination.find('.pagination-item').eq(nextSlide).addClass('active');
            $('.pagination_index.--counter').html(nextSlide + 1);
        });

    }
    console.log(`Slider: '${SliderName}' works!`);
}

const CurrencyAnimation = (currencies, speed = 400) => {
    const numCurrencies = currencies.length;
    const totalDuration = numCurrencies * speed + 1500;

    const Animation = () => {
        currencies.each((index, currency) => {
            setTimeout(() => {
                $(currency).addClass('active');

                setTimeout(() => {
                    $(currency).removeClass('active');
                }, speed);
            }, speed * index);
        });
    }
    Animation()
    setInterval(() => {
        Animation()
    }, totalDuration);
};

const CreateAppButtonAnimation = (scene, speed = 400) => {
    const button = scene.find('.btn_createApp');
    const cursor = scene.find('.cursor_createApp');
    const Animation = () => {
        setTimeout(function () {
            cursor.addClass('animate');
            setTimeout(function () {
                button.addClass('animate');
                button.addClass('animate-focus');
                setTimeout(function () {
                    button.removeClass('animate');
                    setTimeout(function () {
                        cursor.removeClass('animate');
                        setTimeout(function () {
                            button.removeClass('animate-focus');
                        }, speed)
                    }, speed)
                }, speed)
            }, speed)
        }, speed)
    }
    Animation()
    setInterval(function () {
        Animation()
    }, speed * 5 + 1500)
}

const CurrencySlider = (scene, speed = 400) => {
    setInterval(function () {
        setTimeout(function () {
            const currencies = scene.find('.currency');
            for (let i = currencies.length - 1; i >= 0; i--) {
                let currency = currencies[i];
                if (currency.dataset.state === 'last') {
                    currency.dataset.state = 'next';
                } else if (currency.dataset.state === 'next') {
                    currency.dataset.state = 'active';
                } else if (currency.dataset.state === 'active') {
                    currency.dataset.state = 'last';
                }
            }
        }, 1000)
    }, 1000)
}

const PaymentStatistics = (scene, speed = 400) => {
    setInterval(function () {
        setTimeout(function () {
            const messages = scene.find('.message_box');
            for (let i = 0; i <= messages.length; i++) {
                if (messages[i].dataset.state === 'visible') {
                    messages[i].dataset.state = 'hidden';
                    // messages[i].hide(500);
                    if (i + 1 !== messages.length) {
                        messages[i + 1].dataset.state = 'visible';
                        // messages[i + 1].show(500);
                    } else {
                        messages[0].dataset.state = 'visible';
                        // messages[0].show(500);
                    }
                    i = messages.length;
                }
            }
        }, 1500)
    }, 1500)
}

const PhoneAlerts = (scene, speed = 400) => {
    setInterval(function () {
        setTimeout(function () {
            const messages = scene.find('.phone_alert');
            for (let i = 0; i <= messages.length; i++) {
                if (messages[i].dataset.state === 'current') {
                    messages[i].dataset.state = 'last';
                } else if (messages[i].dataset.state === 'last') {
                    messages[i].dataset.state = 'next';
                } else if (messages[i].dataset.state === 'next') {
                    messages[i].dataset.state = 'current';
                }
            }
        }, 1500)
    }, 1500)
}

const AnonymousAnim = (scene, speed = 400) => {
    setInterval(function () {
        setTimeout(function () {
            const messages = scene.find('.message');
            for (let i = 0; i <= messages.length; i++) {
                if (messages[i].dataset.state === 'current') {
                    messages[i].dataset.state = 'last';
                } else if (messages[i].dataset.state === 'last') {
                    messages[i].dataset.state = 'next';
                } else if (messages[i].dataset.state === 'next') {
                    messages[i].dataset.state = 'current';
                }
            }
        }, 1500)
    }, 1500)
}