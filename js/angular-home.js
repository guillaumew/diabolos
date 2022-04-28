angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			{
				name:"Championnat Nantais d’ImproCatch",
				date:new Date(Date.UTC(2022,04,5,21,00)),
				venue: "Nantes (44)",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/93cceceb-872e-190c-cedf-ef729ef200fa.jpeg",
				link:"https://lafabriqueaimpros.com/%C3%A9v%C3%A8nement/championnat-nantais-dimprocatch-18/"
			
			},{
				name:"Politiquement incorrect",
				date:new Date(Date.UTC(2022,04,7,18,30)),
				venue: "Nantes (44)",
				image:"https://lafabriqueaimpros.com/wp-content/uploads/2022/04/politiquement-incorrect.jpg",
				link:"https://lafabriqueaimpros.com/%C3%A9v%C3%A8nement/politiquement-incorrect/"
				
			},{
				name:"Catch d'impro - La piste aux étoiles",
				date:new Date(Date.UTC(2022,04,14,20,30)),
				venue: "Nantes (44)",
				image:"https://www.billetweb.fr/files/page/thumb/catch-dimpro-la-piste-aux-etoiles.jpg?v=1650155466",
				link:"https://www.billetweb.fr/catch-dimpro-la-piste-aux-etoiles"
				
			},{
				name:"Mardi c'est derby",
				date:new Date(Date.UTC(2022,04,17,21,00)),
				venue: "Nantes (44)",
				image:"https://lafabriqueaimpros.com/wp-content/uploads/2022/03/mardis_derby.jpg",
				link:"https://lafabriqueaimpros.com/%C3%A9v%C3%A8nement/les-mardis-cest-derby-5/"
			},{
				name:"Championnat Nantais d’ImproCatch",
				date:new Date(Date.UTC(2022,04,26,21,00)),
				venue: "Nantes (44)",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/93cceceb-872e-190c-cedf-ef729ef200fa.jpeg",
				link:"https://lafabriqueaimpros.com/%C3%A9v%C3%A8nement/championnat-nantais-dimprocatch/"
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
