/**
 * Created by Administrator on 2017/4/29.
 */
$(function(){
//放大镜----------------------------------------------------------------------------------------------------------------
    $('.main1_pic1').mousemove(function(ev){
    // alert('kk')
    var l=ev.pageX-$(this).offset().left-$('.zoom').width()/2;
    var t=ev.pageY-$(this).offset().top-$('.zoom').height()/2;
    // alert(l,t);
    if (l<0) {
        l=0;
    };
    if (t<0) {
        t=0;
    };
    var maxLeft=$(this).width()-$('.zoom').width();
    var maxTop=$(this).height()-$('.zoom').height();
    if (l>maxLeft) {
        l=maxLeft;
    };
    if (t>maxTop) {
        t=maxTop;
    };
    $('.zoom,.main1_pic1_fd').fadeIn();
    $('.zoom').css({'top':t,'left':l});
    $('.main1_pic1_fd img').css({'top':-t*3,'left':-l*3})

    });
    $('.main1_pic1').mouseleave(function(){
    $('.zoom,.main1_pic1_fd').fadeOut();
    })
//切换图片--------------------------------------------------------------------------------------------------------------
    $('.main1_pic2 li').each(function(){
        $(this).mouseover(function(){
            $(this).addClass('first').siblings().removeClass('first');
            // alert($(this).index())
            $('.main1_pic1 img').attr('src','images/'+($(this).index()+1)+'.jpg');
            $('.main1_pic1_fd img').attr('src','images/'+($(this).index()+1)+'_zoom.jpg')
        })
    })
//选择商品--------------------------------------------------------------------------------------------------------------
    $('.main1_cB li').each(function(){
        $('li').click(function(){
            $(this).addClass('ac').siblings().removeClass('ac')
        })
    })
//购物车加减------------------------------------------------------------------------------------------------------------
    var add_num=1;
    $('.add').find('.up').click(function(){
        add_num++;
        if (add_num>1) {
            $('.add').find('.down').removeClass('disabled')
        }
        $('.add .input .addNum').val(add_num);
    });
    $('.add').find('.down').click(function(){
        add_num--;
        if (add_num<2) {
            $(this).addClass('disabled')
            add_num=1;
        }
        $('.add .input .addNum').val(add_num);
    });
// 切换Tab--------------------------------------------------------------------------------------------------------------
    $.fn.tab=function(){
        return this.each(function(){
            var _this=$(this);
            var aLi=_this.find('.tabList li');
            var tabItem=_this.find('.tabItem');
            var i=0;
            aLi.click(function(){
                i=$(this).index();
                $(this).addClass('li_hover').siblings().removeClass('li_hover');
                tabItem.eq(i).show().siblings().hide();
            });
        });
    };
    $('.main2_box').tab({
    });
//搜索框提示------------------------------------------------------------------------------------------------------------
    $( "#autocomplete" ).autocomplete({
        source: [ "手机", "照相机", "电脑", "洗衣机", "冰箱"],
        appendTo: ".autocompleteBox"
    });
//商品介紹切換-----------------------------------------------------------------------------------------------------------
    var aLi=document.getElementById("header_t").getElementsByTagName("li");
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onclick=function(){
            for(var j=0;j<aLi.length;j++){
                aLi[j].className="";
            }
            this.className="header_ac";
        }
    }
//全部商品彈出-----------------------------------------------------------------------------------------------------------
    $("#allGood").click(function(){
        $(".nav_inner").show()
    })
    $(".nav_inner").mouseleave(function(){
        $(".nav_inner").hide()
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





















})



