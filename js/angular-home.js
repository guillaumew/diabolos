angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			
			{
				name:"Festival l'Envolée #10 - Mini-match Diabolos Nantes vs La Troupanou",
				date:new Date(Date.UTC(2023,05,10,18,30)),
				venue: "La tour à plomb - Quai Emile Paraf - Couëron",
				Price: "De 6€ à 10€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/54b9d280-9c82-b4b7-a84a-ac59d3b5b92d.jpg",
				link:"https://www.lesluciolesassociation.fr"
			},
			{
				name:"Le Titan et les Diabolos Nantes partent à l'aventure",
				date:new Date(Date.UTC(2023,05,15,21,00)),
				venue: "L'Ubik - 43 rue du maréchal Joffre - Nantes",
				Price: "Entrée libre",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/468f5e6a-2f0d-e399-58b9-b99667968d9d.png",
				link:"https://www.facebook.com/events/634583884935159"
				
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
