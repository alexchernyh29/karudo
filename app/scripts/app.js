import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();

	$('.group__header').click(function(){
        $('.list__options').slideToggle(300)
        $('.group__arrow').toggleClass( "active" );
    });

    $('.group__header-plan').click(function(){
        $('.list__options-plan').slideToggle(300);
        $('.group__arrow-2').toggleClass( "active" );
    });
    
    $('.group__header-floor').click(function(){
        $('.list__options-floor').slideToggle(300);
        $('.group__arrow-3').toggleClass( "active" ); 
    });
});
