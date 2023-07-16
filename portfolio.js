document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menuOverlay = document.querySelector(".menu-overlay");
    
    menuToggle.addEventListener("click", function() {
      if (menuOverlay.classList.contains("opened")) {
        menuOverlay.classList.remove("opened")
        menuToggle.classList.remove("cross")
      } else {
        menuOverlay.classList.add("opened")
        menuToggle.classList.add("cross")
      }
    });
  });
  
  const headings = document.querySelectorAll('.lazyload')
  const observer = new IntersectionObserver(popupElements)
  
  function popupElements(entries){
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    })
  }
  
  headings.forEach(heading => {
    observer.observe(heading)
  })
  
  













  // ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
const btn01 = document.querySelector('.btn01');
const btn02 = document.querySelector('.btn02');
const btn03 = document.querySelector('.btn03');
const btn04 = document.querySelector('.btn04');
const btn05 = document.querySelector('.btn05');
const btn06 = document.querySelector('.btn06');
const btn07 = document.querySelector('.btn07');
const btn08 = document.querySelector('.btn08');
const btn09 = document.querySelector('.btn09');
const btn10 = document.querySelector('.btn10');
const btn11 = document.querySelector('.btn11');
const btn12 = document.querySelector('.btn12');

const modal = document.querySelector('.modal');
const modal01 = document.querySelector('.modal01');
const modal02 = document.querySelector('.modal02');
const modal03 = document.querySelector('.modal03');
const modal04 = document.querySelector('.modal04');

const modal05 = document.querySelector('.modal05');
const modal06 = document.querySelector('.modal06');
const modal07 = document.querySelector('.modal07');
const modal08 = document.querySelector('.modal08');

const modal09 = document.querySelector('.modal09');
const modal10 = document.querySelector('.modal10');
const modal11 = document.querySelector('.modal11');
const modal12 = document.querySelector('.modal12');

const closeBtn01 = document.querySelector('.close01');
const closeBtn02 = document.querySelector('.close02');
const closeBtn03 = document.querySelector('.close03');
const closeBtn04 = document.querySelector('.close04');

const closeBtn05 = document.querySelector('.close05');
const closeBtn06 = document.querySelector('.close06');
const closeBtn07 = document.querySelector('.close07');
const closeBtn08 = document.querySelector('.close08');

const closeBtn09 = document.querySelector('.close09');
const closeBtn10 = document.querySelector('.close10');
const closeBtn11 = document.querySelector('.close11');
const closeBtn12 = document.querySelector('.close12');

const overlay = document.querySelector('.overlay');

// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
btn01.addEventListener('click', function(e){
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  // モーダルとオーバーレイにactiveクラスを付与する
  modal01.classList.add('active');
  overlay.classList.add('active');
});

btn02.addEventListener('click', function(e){
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  // モーダルとオーバーレイにactiveクラスを付与する
  modal02.classList.add('active');
  overlay.classList.add('active');
});

btn03.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal03.classList.add('active');
    overlay.classList.add('active');
  });
  btn04.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal04.classList.add('active');
    overlay.classList.add('active');
  });

  btn05.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal05.classList.add('active');
    overlay.classList.add('active');
  });
  btn06.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal06.classList.add('active');
    overlay.classList.add('active');
  });
  btn07.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal07.classList.add('active');
    overlay.classList.add('active');
  });
  btn08.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal08.classList.add('active');
    overlay.classList.add('active');
  });
  btn09.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal09.classList.add('active');
    overlay.classList.add('active');
  });
  btn10.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal10.classList.add('active');
    overlay.classList.add('active');
  });
  btn11.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal11.classList.add('active');
    overlay.classList.add('active');
  });
  btn12.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal12.classList.add('active');
    overlay.classList.add('active');
  });
  

// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeBtn01.addEventListener('click', function(){
  modal.classList.remove('active');
  overlay.classList.remove('active');
});
closeBtn02.addEventListener('click', function(){
    modal02.classList.remove('active');
    overlay.classList.remove('active');
  });
  closeBtn03.addEventListener('click', function(){
    modal03.classList.remove('active');
    overlay.classList.remove('active');
  });
  closeBtn04.addEventListener('click', function(){
    modal04.classList.remove('active');
    overlay.classList.remove('active');
  });

  closeBtn05.addEventListener('click', function(){
    modal05.classList.remove('active');
    overlay.classList.remove('active');
  });closeBtn06.addEventListener('click', function(){
    modal06.classList.remove('active');
    overlay.classList.remove('active');
  });closeBtn07.addEventListener('click', function(){
    modal07.classList.remove('active');
    overlay.classList.remove('active');
  });closeBtn08.addEventListener('click', function(){
    modal08.classList.remove('active');
    overlay.classList.remove('active');
  });

  closeBtn09.addEventListener('click', function(){
    modal09.classList.remove('active');
    overlay.classList.remove('active');
  });closeBtn10.addEventListener('click', function(){
    modal10.classList.remove('active');
    overlay.classList.remove('active');
  });closeBtn11.addEventListener('click', function(){
    modal11.classList.remove('active');
    overlay.classList.remove('active');
  });closeBtn12.addEventListener('click', function(){
    modal12.classList.remove('active');
    overlay.classList.remove('active');
  });

// オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
overlay.addEventListener('click', function() {
  modal01.classList.remove('active');
  modal02.classList.remove('active');
  modal03.classList.remove('active');
  modal04.classList.remove('active');
  modal05.classList.remove('active');
  modal06.classList.remove('active');
  modal07.classList.remove('active');
  modal08.classList.remove('active');
  modal09.classList.remove('active');
  modal10.classList.remove('active');
  modal11.classList.remove('active');
  modal12.classList.remove('active');
  overlay.classList.remove('active');
});