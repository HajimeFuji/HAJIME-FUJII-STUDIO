$(function () {
    AOS.init();

    $(".main-visual").vegas({
        timer: false,
        // ぼかし
        transition: 'blur',
        transitionDuration: 10000,
        delay: 10000,
        // サイズ大⇒小 動かす
        animation: 'kenburns',
        animationDuration: 10000,
    slides: [
        { src: "./img_photos/owl_alaska_01.jpg" },
        { src: "./img_photos/owl_alaska.jpg" },
        ]
    });

    $(document).ready(function() {
        $('.drawer').drawer();
    });
})