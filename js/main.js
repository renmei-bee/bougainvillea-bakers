
$(function () {
    $(".slider").slick({
        arrows: false,// 	前へ次への矢印（初期値：true）
        autoplay: true, // 自動再生（初期値：false）
        adaptiveHeight: true,// スライドの高さの自動調整（初期値：false）
        speed: 200, // アニメーションのスピード　（初期値: 500）
        pause: 2000, // 画像の切り替わる間隔　（初期値: 4000）
        centerMode: true,
        centerPadding: "15%",
        dots: true, // ドットインジケーターの表示（初期値：false）
        slidesToShow: 3,
        dotsClass: "slide-dots" //ここでclass名を変更する（デフォルトはslick-dots）
    });
});

