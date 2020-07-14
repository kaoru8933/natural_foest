
var bgHeight = $('#fv').outerHeight();

$('#hum-btn').on('click',function(){
  if($(window).scrollTop() < bgHeight){
  $(this).toggleClass('active');
  $('#nav').toggleClass('header-nav-view');
  $('.menu-musk').fadeToggle(300);
  }else{
  $(this).toggleClass('black'); //黒いときメニューを開くと白くなる
  $(this).toggleClass('active');
  $('#nav').toggleClass('header-nav-view');
  $('.menu-musk').fadeToggle(300);
  }
});

$(window).on('load scroll',function(){
  if($(window).scrollTop() < bgHeight){
    $('#hum-btn').removeClass('black');
  }else{
    $('#hum-btn').addClass('black');
  }

});

var mySwiper = new Swiper ('.swiper-container', {
  // オプションパラメータ(一部のみ抜粋)
  loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
  speed: 600, // スライドが切り替わるトランジション時間(ミリ秒)。
  slidesPerView: 1, // 何枚のスライドを表示するか
  spaceBetween: 0, // スライド間の余白サイズ(ピクセル)
  direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
  effect: 'slide', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)

  // スライダーの自動再生
  // autoplay: true 　のみなら既定値での自動再生
  autoplay: {
    delay: 3000, // スライドが切り替わるまでの表示時間(ミリ秒)
    stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
    disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
  },


 
});