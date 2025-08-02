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

//área de serviços
const servicesMenu = document.querySelectorAll( '.nav-pills .nav-link' );
if (servicesMenu){
	servicesMenu.forEach( (element)=>{
		element.addEventListener( 'click', (e)=>{
			e.preventDefault();
			
			const activeItem = document.querySelector('.nav-pills .nav-link.active');
			if (activeItem){
				activeItem.classList.remove('active')
			}
			e.target.classList.add( 'active' );
			const menu = e.target.dataset.menu;
			
			const servicosMenu = servicos.filter( (servico)=>{
				if ( servico.tipo === menu ) return true;
			} );

			//montar o menu		
			let cards = '';
			for (let i = 0; i<servicosMenu.length; i++){
				cards +=
			    `<div class="service-card col-12 col-md-4">
			    	<div class="card">
						<img src=${servicosMenu[i].imagem} class="card-img-top" alt="...">
						<div class="card-body">
				  			<div class="card-body--title-area d-flex justify-content-between">
				  				<h5 class="card-title">${servicosMenu[i].titulo}</h5>	
				  				<div class="time">${servicosMenu[i].tempo}</div>
				  			</div>
				    
				    		<p class="card-text">${servicosMenu[i].descricao}</p>						    	
				    		<div class="price">${servicosMenu[i].valor.toLocaleString('pt-BR', { 
                                                    				style: 'currency', 
                                                    				currency: 'BRL' 
                                                  					})
				    												}</div>						    
				  		</div>							 
				    </div>
				</div>`;
			};

			//limpa a área do menu
			document.querySelector( '.services-area--services' ).innerHTML = cards;

		});
	});	
}


let indexFeedback = -1;
nextFeedback();

function nextFeedback(){

	indexFeedback = ( indexFeedback === (avaliacoes.length-1) ? 0 : indexFeedback+1)

	const feedback =
	`<img src=${ avaliacoes[indexFeedback].avatar }>
	 <p>${ avaliacoes[indexFeedback].mensagem }</p>							
	 <span class="author">${ avaliacoes[indexFeedback].autor }</span>`

	const container = document.querySelector('.feedback-container');
	container.style.opacity = '0';
	container.innerHTML = feedback;

	setTimeout( ()=>{
		container.style.opacity = '1';
	},200 )

}

function priorFeedback(){
	indexFeedback = ( indexFeedback === 0 ? (avaliacoes.length-1) : indexFeedback-1 )

	const feedback =
		`<img src=${ avaliacoes[indexFeedback].avatar }>
	 	<p>${ avaliacoes[indexFeedback].mensagem }</p>							
	 	<span class="author">${ avaliacoes[indexFeedback].autor }</span>`

	 const container = document.querySelector('.feedback-container');
	 container.style.opacity = '0';
	 container.innerHTML = feedback;

	 setTimeout( ()=>{
	 	container.style.opacity = '1';
	 },200 )
}

document.getElementById('nextFeedback').addEventListener( 'click', nextFeedback );
document.getElementById('priorFeedback').addEventListener( 'click', priorFeedback );