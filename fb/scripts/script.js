$(document).ready(function(){
var str = "";	
var result = false;
//var regexp = /^([0-9a-z_.-]+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/;
var regexp = /^([0-9a-z_.-]+)@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
// ([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$
var validEmail =  '<div class="ValidEmail">thanks, your address has been added</div>'
var invalidEmail  = '<div class="notValidEmail">please enter a valid email address</div>';

$('input.blueButton').click(function(e){
	e.preventDefault();	
	str = $('#email').attr('value').toLowerCase();
	result = !(regexp.exec(str) == null);
	//$('div.informer').hide();
	if (result == true){
			
		var str = $('#email').val();
		$.ajax({
		  type: 'POST',
		  url: "http://www.penreader.com/cgi-bin/sub.cgi",
		  data: {email: str, language2: 'ru'},
		  error: function(){
			  $('#subscribe p').fadeOut().hide();
			  $('<p>Спасибо за подписку на рассылку! Подтверждение подписки было отправлено Вам по электронной почте.</p>').fadeIn().appendTo('#subscribe');
			  $('#subscribe p').css({position: 'relative', top: '-10px' })
		  }		  
		});
		e.preventDefault();
		e.stopPropogation();
								 										 
	} else {
		$('#subscribe p').fadeOut().hide();
		$('<p>Неправильный адрес. Пожалуйста, введите Ваш e-mail</p>').fadeIn().appendTo('#subscribe');
		$('#subscribe p').css({color: '#df0000'})
	}

	});
});
