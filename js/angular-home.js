angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			
			{
				name:"Les jeudis c'est Derby",
				date:new Date(Date.UTC(2023,00,05,21,00)),
				venue: "La Fabrique à impros - 14 rue de l'arche sèche - Nantes",
				Price: "tarif : 8€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/1a087a03-8d2d-6208-4f36-59721e5af934.jpeg",
				link:"https://lafabriqueaimpros.com/produit/les-jeudis-cest-derby-9/"
				
			},
			{
				name:"L'impro dont vous êtes le héros",
				date:new Date(Date.UTC(2023,00,14,18,30)),
				venue: "La Fabrique à impros - 14 rue de l'arche sèche - Nantes",
				Price: "tarif : 8€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/4ef4ad6b-76ca-ee86-a1cf-4043eb069bae.jpg",
				link:"https://lafabriqueaimpros.com/produit/limpro-dont-vous-etes-le-heros/"
			},
			 {
				name:"La vie secrète des livres",
				date:new Date(Date.UTC(2023,00,20,19,00)),
				venue: "Médiathèque de Saint Aignan de Grand Lieu - 39 Rue des Frères Rousseau",
				Price: "Entrée libre",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/ce6e8167-a7f5-cdca-61a1-2e777c947c03.jpg",
				link:"https://www.facebook.com/events/934219190900867"
				
			},
			{
				name:"Match avec l'Alligator de Bordeaux",
				date:new Date(Date.UTC(2023,00,21,20,30)),
				venue: "Union Saint Bruno - 49 Rue Brizard, Bordeaux",
				Price: "tarif : 8€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/10464ad1-b749-abe2-3488-17af57999985.jpg",
				link:"https://www.helloasso.com/associations/union-saint-bruno/evenements/match-d-impro-diabolos-nantes-vs-l-alligator"
			},
		];
	})
	.controller('ActorsListController',function(){
		var actorList = this;
		actorList.actors = [
			{name: "Guillaume",photo : "guillaume_wolf.jpg"},
			{name: "Arnaud",photo : "arnaud_mesnard.jpg"},
			{name: "Stephane",photo : "stephane_baikoff.jpg"},
			{name: "Sylvain",photo : "sylvain.jpg"},
			{name: "Juliette",photo : "juliette.jpg"},
			{name: "Julie",photo : "julie.jpg"},
			{name: "Adiren G",photo : "adrieng.jpg"},
			{name: "Anaïs",photo : "anais.jpg"},
			{name: "Frederic",photo : ""},
			{name: "Aude",photo : ""},
			{name: "Laurence",photo : ""},
			{name: "Christophe",photo : ""},
			{name: "Eleonore",photo : ""},
		];
		actorList.actors.forEach(function(element) {
			if(element.photo ===""){
				element.photo = "logo.jpg"
			}
    	element.order= 0.5 - Math.random();
    });
	})
;
