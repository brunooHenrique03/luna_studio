const btnMenu = document.getElementById('menuMobile');
const menu = document.getElementById('navMenu');

btnMenu.addEventListener('click', ()=>{
	btnMenu.classList.toggle("active");
    navMenu.classList.toggle("active");	
});

document.querySelectorAll( '#navMenu ul li a' ).forEach((element)=>{
	element.addEventListener( 'click', ()=>{
		btnMenu.classList.remove("active");
    	menu.classList.remove("active");	
	});
})