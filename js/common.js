$(function () {
    AOS.init();

    $(".main-visual").vegas({
        timer: false,
        // ぼかし
        transition: 'blur',
        transitionDuration: 20000,
        delay: 20000,
        // サイズ大⇒小 動かす
        animation: 'kenburns',
        animationDuration: 20000,
    slides: [
        { src: "./img_photos/birds/shimaenaga_001.JPG" },
        ]
    });

    $(document).ready(function() {
        $('.drawer').drawer();
    });
})