(function($) {
    function rating(num, func = ()=>{}) {
        $('.rating > i:nth-last-child(' + num + ')').click(() => {
            $('.rating > i').removeClass('active');
            $('.rating > i:nth-last-child(' + num + ')').addClass('active');
            func();
        });
    }

    $.fn.rate = (num) => {
        for(let i=0; i<num; i++){
            rating(i+1);
        }
    };

    $.fn.rating = (num, func) => {
        rating(num, func);
    };

}(jQuery));

/* active
$().rate(5);
*/

/* active while adding some actions
$().rating(1, ()=>{
    console.log('like');
});
*/
