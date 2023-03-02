angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			
			{
				name:"Thérapie de couples",
				date:new Date(Date.UTC(2023,02,11,18,30)),
				venue: "La Fabrique à impros - 14 rue de l'arche sèche - Nantes",
				Price: "tarif : 8€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/7b3ce511-bb9d-87e2-6fc7-286ad6c3be55.jpg",
				link:"https://lafabriqueaimpros.com/produit/therapie-de-couples/"
			},
			{
				name:"Les jeudis c'est Derby",
				date:new Date(Date.UTC(2023,02,23,21,00)),
				venue: "La Fabrique à impros - 14 rue de l'arche sèche - Nantes",
				Price: "tarif : 8€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/1a087a03-8d2d-6208-4f36-59721e5af934.jpeg",
				link:"https://lafabriqueaimpros.com/produit/les-jeudis-cest-derby-16/"
				
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
