
var myColors=['#f0e4d7','#f5c0c0','#ff7171','#9fd8df']

for (var i=0;i<myColors.length;i++)
{
    $('.colors').eq(i).css('backgroundColor',myColors[i])
}


$('.colors').click(function()
{
    var mode=$(this).css('backgroundColor')
    $('.mode-change').css('color',mode)
})
var modeOptionsWidth=$('.color-options').outerWidth();
$('.mode-options').css({'left':-modeOptionsWidth})
$('.mode-sider').click(function()
{
    var modeOptionsWidth=$('.color-options').outerWidth();
    if($('.mode-options').css('left')=='0px')
    {
        $('.mode-options').animate({'left':-modeOptionsWidth},500)
    }
    else
    {
        $('.mode-options').animate({'left':'0px'},500)
    }
    
})
