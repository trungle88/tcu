jQuery(document).ready(function(){
	listPost();
});

function listPost(){
	jQuery('.content-ctg ul').each(function(){
		var h = jQuery(this).height();
		var total = jQuery(this).find('li').size();
		console.log(h/total);
		if(h/total > 34){
			jQuery(this).find('li').css('marginTop','7px');
		}
	});
}