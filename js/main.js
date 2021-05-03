var myColors=['#f0e4d7','#f5c0c0','#ff7171','#9fd8df','#206a5d','#81b214','#ffcc29','#f5f7b2','#1cc5dc','#cf0000','#890596']

for (var i=0;i<myColors.length;i++)
{
    $('.colors').eq(i).css('backgroundColor',myColors[i])
}

/* _____________ Color Mode Start _____________ */
$('.colors').click(function()
{
    var mode=$(this).css('backgroundColor')
    console.log(mode);
    $('.mode-change').css('color',mode)
})

var modeOptionsWidth=$('.color-options').outerWidth();

    $('.mode-options').css({'left':-modeOptionsWidth})

$('.mode-sider').click(function()
{

    if($('.mode-options').css('left')=='0px')
    {
        $('.mode-options').animate({'left':-modeOptionsWidth},500)
    }
    else
    {
        $('.mode-options').animate({'left':'0px'},500)
    }
    
})
