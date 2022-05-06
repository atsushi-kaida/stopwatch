$(document).ready(function(){
  var $start = $('#start');
  var $stop = $('#stop');
  var $reset = $('#reset');
  var $btn = $('.btn');
  
  var $thousand = $('#thousand');
  var $hundred = $('#hundred');
  var $ten = $('#ten');
  var $one = $('#one');
  
  var thousand = 0;
  var hundred = 0;
  var ten = 0;
  var one = 0;
  var point_one =0;// 再スタート時の不正確さをなくすため
  var timer;
  
  $start.click(function(){
      if($start.hasClass('is_active')){
        timer = setInterval(addTime, 100);
        console.log("isactive");
      }
      console.log($start.hasClass('is_active'));
      $start.addClass('is_inactive').removeClass('is_active');
      $stop.add($reset).addClass('is_active').removeClass('is_inactive');
  });
  
  $stop.click(function(){
      $start.addClass('is_active').removeClass('is_inactive');
      $stop.addClass('is_inactive').removeClass('is_active');
      clearInterval(timer);
  });
  
  $reset.click(function(){
      $start.addClass('is_active').removeClass('is_inactive');
      $stop.add($reset).addClass('is_inactive').removeClass('is_active');
      clearInterval(timer);
      thousand = 0;
      hundred = 0;
      ten = 0;
      one = 0;
      point_one = 0;
      $thousand.text(thousand);
      $hundred.text(hundred);
      $ten.text(ten);
      $one.text(one);
  });
  
  
  
  function addTime (){
    point_one += 1;
    if (point_one == 10){
      point_one = 0;
      one += 1;
    }
    if (one == 10){
      one = 0;
      ten += 1;
    }
    if (ten == 10){
      ten = 0;
      hundred += 1;
    }
    if (hundred == 10){
      hundred = 0;
      thousand += 1;
    }
    if (thousand == 10){
      thousand = 0;
    }
    $thousand.text(thousand);
    $hundred.text(hundred);
    $ten.text(ten);
    $one.text(one);
    console.log(ten +","+ one + "," + point_one);
  }

});