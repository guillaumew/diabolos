angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			
			{
				name:"Politiquement incorrect",
				date:new Date(Date.UTC(2023,09,14,18,30)),
				venue: "La Fabrique à Impro - 14 rue de l'Arche Sèche - Nantes",
				Price: "9€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/7462f7a0-21f8-c224-62eb-338575373881.jpg",
				link:"https://lafabriqueaimpros.com"
				
			},
			{
				name:"CNIC Saison 3 - Y.M.J.B - match 1",
				date:new Date(Date.UTC(2023,09,29,18,00)),
				venue: "La Fabrique à Impro - 14 rue de l'Arche Sèche - Nantes",
				Price: "9€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/c2437684-72ef-9ef9-2fa2-226ae0434c5d.png",
				link:"https://lafabriqueaimpros.com"
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
