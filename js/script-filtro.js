$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.btn-filtro[category="all"]').addClass('btn-filtro-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.btn-filtro').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.btn-filtro').removeClass('btn-filtro-active');
		$(this).addClass('btn-filtro-active');

		// OCULTANDO PRODUCTOS =========================
		$('.card').css('transform', 'scale(0)' );
		function hideProduct(){
			$('.card').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.card[category="'+catProduct+'"]').show();
			$('.card[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.btn-filtro[category="all"]').click(function(){
		function showAll(){
			$('.card').show();
			$('.card').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});