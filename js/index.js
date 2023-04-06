$(document).ready(function () {

  $(".gnb").hover(function(){
    $(this).find(".main .sub_all").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
    $("nav").css({"box-shadow":"0 0 30px rgba(0,0,0,0.2)"});
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });
  
  let $img = $(".banners ul li");
  let $text = $(".banners ul li .des textVisible");
  let oldImg=0;  
  let newImg=0; 
  let oldText=0;  
  let newText=0;
  let count=$img.length;

  function changeImg(newImg){ 

    if(oldImg != newImg){
      $img.eq(oldImg).removeClass("imgVisible");
			$img.eq(newImg).addClass("imgVisible"); 
    };
    oldImg = newImg;

  };

  function changeText(newText){ 

    if(oldText != newText){
      $text.eq(oldText).removeClass("textVisible");
			$text.eq(newText).addClass("textVisible"); 
    };
    oldText = newText;

  };

  function autoImg(){

    newImg++;
    if(newImg>count-1){ 
      newImg=0;
		}
		changeImg(newImg);

  };

  function autoText(){

    newText++;
    if(newText>count-1){ 
      newText=0;
		}
		changeText(newText);

  }

  timer1=setInterval(autoImg,6000); 
  timer2=setInterval(autoText,6000);

//content______________________________________
  
function bannerAuto(){

  $(".image ul").stop(true,true).animate({marginLeft:"-=480px"},500,function(){			
    $(".image ul li:first-child").appendTo(".image ul"); 
    $(this).css({marginLeft:"0px"}); 
  });	

};

bauto=setInterval(bannerAuto,4000);



// menu_________________________________________
  
$(".btn li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $(`#${result}`).addClass("active"); 

});


});
