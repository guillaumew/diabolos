angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			
			{
				name:"CNIC Saison 3 - le maître du mal et son fidèle serviteur - match 1",
				date:new Date(Date.UTC(2023,08,17,20,00)),
				venue: "La Fabrique à Impro - 14 rue de l'Arche Sèche - Nantes",
				Price: "9€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/9a2b87ae-20c1-8052-0057-b8f9e733a795.jpg",
				link:"https://lafabriqueaimpros.com"
			},
			{
				name:"Kabaraoké",
				date:new Date(Date.UTC(2023,08,29,21,00)),
				venue: "La Fabrique à Impro - 14 rue de l'Arche Sèche - Nantes",
				Price: "14€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/c95d8ba8-bae1-0293-7628-2bc0a27de8c4.jpg",
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
