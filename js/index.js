/**
 * Created by Administrator on 2017/4/29.
 */
$(function(){
//城市选择--------------------------------------------------------------------------------------------------------------
    $('.header .header_left').each(function(){
        var btnA=$(this).children('ul');
        if (btnA.length==1) {
            btnA.addClass('city_list');
        }
        $('.header .header_left').hover(
            function(){
                var chooseCity=$('.header .header_left ul li a')
                chooseCity.each(function(){
                    $(this).click(function(){
                        for (var i = 0; i < chooseCity.length; i++) {
                            chooseCity.css({background:'',color:''})
                        }
                        $('.header .header_left p a').html($(this).text());
                        $(this).css({background:' #c81623',color:'#fff'})
                    })
                    btnA.show();
                    btnA.parent().css('background','#f1f1f1')
                })
            },
            function(){
                btnA.hide();
                btnA.parent().css('background','')
            }
        )
    });
//搜索框提示------------------------------------------------------------------------------------------------------------
    $( "#autocomplete" ).autocomplete({
        source: [ "手机", "照相机", "电脑", "洗衣机", "冰箱"],
        appendTo: ".autocompleteBox"
    });
//轮播图----------------------------------------------------------------------------------------------------------------
    $('#demo01').flexslider({
        animation: 2000,
        direction:"horizontal",
        easing:"swing"
    });
//全部商品--------------------------------------------------------------------------------------------------------------
    var oUl=document.getElementById("navList");
    var aLi=oUl.getElementsByTagName('li');
    var oTab=document.getElementsByClassName('goods_tab')[0];
    var aItem=oTab.getElementsByClassName('tabItem');
    var aNva=document.getElementsByClassName('navA')
    var timer;
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index=i;
        aItem[i].index=i;
        aNva[i].index=i;
        aLi[i].onmouseenter=function(){
            for (var j = 0; j < aLi.length; j++) {
                aLi[j].style.backgroundColor="";
                aItem[j].style.display="none";
                aNva[j].style.color=""
            }
            aLi[this.index].style.backgroundColor="#fff";
            aItem[this.index].style.display="block";
            aNva[this.index].style.color="#c81623"
        }
        aLi[i].onmouseleave=function(){
            var ss=this.index;
            this.style.background="#c81623";
            aNva[this.index].style.color="#fff"
            timer=setTimeout(function(){
                aItem[ss].style.display="none";
            },100);
        }
        aItem[i].onmouseenter=function(){
            clearTimeout(timer);
            aNva[this.index].style.color="#c81623";
            this.style.display="block";
            aLi[this.index].style.background="#fff";
        }
        aItem[i].onmouseleave=function(){
            this.style.display="none";
            aNva[this.index].style.color="#fff";
            aLi[this.index].style.background="#c81623";
        }
    };
//鼠标进入icon弹窗====================================================================================
    var tcInner=document.getElementsByClassName('tc_inner')[0];
    var aTc=tcInner.getElementsByClassName('tc_inner1');
    var tcLi=document.getElementsByClassName('tanchuang');
    for(var i=0;i<tcLi.length;i++){
        tcLi[i].index=i;
        tcLi[i].onmousemove=function(){
            for(var j=0;j<tcLi.length;j++){
                aTc[j].style.display='none';
            }
            aTc[this.index].style.display='block';
        }
    }
    $('.tc_inner1 span').click(function(){
        $(this).parents('.tc_inner1').hide()
    })
//标签切换--------------------------------------------------------------------------------------------------------------
    $(".floor1").each(function(){
        var _this=$(this);                       //_this为传入的对象$(this)
        var aLi=_this.find(".floor1_nav li");    //找到对象中的li
        var tabItem=_this.find(".floor1_mid");   //找到对象中对应的li
        aLi.mousemove(function(){               //绑定移入事件
            var i=$(this).index();
            //  $(this)给移入的li添加樣式addClass("ac"), siblings()---,去除样式removeClass("ac")
            aLi.eq(i).addClass("ac").siblings().removeClass("ac");
            //  tabItem.eq(index)---找到移入li对应的div显示,show(),筛选同辈的li siblings(),隐藏div hide()---
            tabItem.eq(i).show().siblings().hide()
        });
    })
//右侧固定导航----------------------------------------------------------------------------------------------------------
    $('.right_nav .rn_top .show').each(function(){
        $(this).mouseover(function(){
            var n=$(this).index();
            $('.right_nav .rn_top .show em').eq(n).stop().animate({right:'35px'},"slow")
            $('.right_nav .rn_top .show em').eq(n).css('background','#ca1623');

        })
        $(this).mouseout(function(){
            var n=$(this).index();
            $('.right_nav .rn_top .show em').eq(n).stop().animate({right:'-62px'},"slow")
            $('.right_nav .rn_top .show em').eq(n).css('background','#7a6e6e');
        })
    })
    $('.right_nav .rn_bot .show').each(function(){
        $(this).mouseover(function(){
            var n=$(this).index();
            $('.right_nav .rn_bot .show em').eq(n).stop().animate({right:'35px'},"slow")
            $('.right_nav .rn_bot .show em').eq(n).css('background','#ca1623');
        })
        $(this).mouseout(function(){
            var n=$(this).index();
            $('.right_nav .rn_bot .show em').eq(n).stop().animate({right:'-62px'},"slow")
            $('.right_nav .rn_bot .show em').eq(n).css('background','#7a6e6e');
        })
    })
//楼层标签显示----------------------------------------------------------------------------------------------------------
    $(window).scroll(function(){
        if($(window).scrollTop()>1400){
            $('.label').fadeIn();
        }else{
            $('.label').fadeOut();
        }
        $('.floor1').each(function() {
            var H=$(window).scrollTop()+$(window).height()/2;
            var h=$(this).offset().top;
            if(h<H){
                var index=$(this).index()-7;
                $('.label li').eq(index).addClass('ac').siblings().removeClass('ac');
                $(".floor .oneF").eq(index).addClass('ab').siblings().removeClass('ab');
            }
        });
    });
    $('.label li').click(function(){
        $(this).addClass('ac').siblings().removeClass('ac');
        var index=$(this).index();
        //找到对应楼层的top值,让滚动条滚动到这个值
        $(".floor .oneF").eq(index).addClass('ab').siblings().removeClass('ab');
        var t=$('.floor1').eq(index).offset().top;
        $('body,html').animate({"scrollTop":t});

    });





});











