angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			
			{
				name:"Kabaraoké",
				date:new Date(Date.UTC(2023,10,04,21,00)),
				venue: "La Fabrique à Impro - 14 rue de l'Arche Sèche - Nantes",
				Price: "14€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/c95d8ba8-bae1-0293-7628-2bc0a27de8c4.jpg",
				link:"https://lafabriqueaimpros.com"
				
			},
			{
				name:"La vie secrète des livres",
				date:new Date(Date.UTC(2023,10,24,20,00)),
				venue: "Médiathèque Geneviève Coutau - 1 Place Jacques Demy - Clisson",
				Price: "entrée libre",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/42f17f4e-298b-8374-6d83-f945c9464684.jpg",

			},
			{
				name:"Catch d'impro - bestiaire extraordinaire",
				date:new Date(Date.UTC(2023,10,25,20,30)),
				venue: "Le Dix - 10 place des garennes - Nantes",
				Price: "5€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/6538d6fa-317b-74ee-982a-a3a2f49eaf31.jpg",
				link:"https://www.billetweb.fr/catch-dimprovisation-bestiaire-extraordinaire"
				
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
