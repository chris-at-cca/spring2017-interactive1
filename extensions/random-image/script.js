var width = $(document).width();
var height = $(document).height();

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(width);
console.log(height);

$('body').append( '<div id="random"></div>' );

$('#random').css('width', width+'px');
$('#random').css('height', height+'px');

$('img').each(function(){
   	$(this).clone().appendTo('#random');
});


$('#random img').each(function(){
    var left = randomIntFromInterval(0,width);
    var top = randomIntFromInterval(0,height);
    var rotate = randomIntFromInterval(0,360);

    $(this).css('position', 'absolute');
    $(this).css('left', left+'px');
    $(this).css('top', top+'px');
    $(this).css('transform', 'rotate('+rotate+'deg)');
});

