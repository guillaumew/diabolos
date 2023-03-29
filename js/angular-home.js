angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			
			{
				name:"Kabaraoké",
				date:new Date(Date.UTC(2023,03,14,20,30)),
				venue: "Les filles du Marronnier - 3 Boulevard Gabriel Lauriol - Nantes",
				Price: "Entrée libre",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/c95d8ba8-bae1-0293-7628-2bc0a27de8c4.jpg",
				link:"https://www.facebook.com/events/745726783889261"
			},
			{
				name:"Match d'impro Lille vs Nantes",
				date:new Date(Date.UTC(2023,04,06,20,30)),
				venue: "Le Dix - 10 place des Garennes - Nantes",
				Price: "tarif : 5€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/d2f85320-e019-09cb-1b17-b685631d0740.jpg",
				link:"https://www.billetweb.fr/match-dimpro-cric-de-lille-vs-diabolos-nantes"
				
			},
			{
				name:"Championnat nantais d'impro-catch saison 2",
				date:new Date(Date.UTC(2023,04,06,20,30)),
				venue: "La Fabrique à Impro - 14 rue de l'Arche Sèche - Nantes",
				Price: "tarif : 8€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/717dd047-ec5d-8b15-02f7-bf898b725967.jpg",
				link:"https://lafabriqueaimpros.com/produit/championnat-nantais-dimprocatch-28/"
				
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
