angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			{
				name:"Politiquement incorrect",
				date:new Date(Date.UTC(2022,05,11,19,00)),
				venue: "Salle du Jamet - 25 rue du Jamet - Nantes (44)",
				Price: "tarif : 7 €",
				image:"https://lafabriqueaimpros.com/wp-content/uploads/2022/04/politiquement-incorrect.jpg",
				link:"https://lekiosquenantais.fr/l-agenda/politiquement-incorrect-la-replique"
				
			},{
				name:"Festival l'envolée - catch impro",
				date:new Date(Date.UTC(2022,05,24,21,15)),
				venue: "La tour à Plomb - Couëron (44)",
				Price: "Tarif : 8€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/3c0e6509-1456-a12d-4a38-5090e0a7b3ce.png",
				link:"https://www.lesluciolesassociation.fr/programmation-festival-lenvolee/"
			}
			
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
