// Event pada saat di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');

	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top-50
	}, 1250, 'easeInOutExpo');
	

	e.preventDefault();

});





// parallax
// about
$(window).on('load', function(){
	$('.pKiri').addClass('Pmuncul');
});

$(window).on('load', function(){
	$('.pKanan').addClass('Pmuncul');
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();


	// Jumbotrom
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});


	// Gallery
	if ( wScroll > $('.gallery').offset().top - 300) {
		$('.gallery .thumbnail').each(function(i){
			setTimeout(function(){
				$('.gallery .thumbnail').eq(i).addClass('muncul')
			}, 300 * (i+1));
		});

	};

});