angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			{
				name:"Mardi c'est derby",
				date:new Date(Date.UTC(2022,02,15,21,00)),
				venue: "Nantes (44)",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/ef86a908-1b02-2d34-72c8-18be6d279bc4.jpeg",
				link:"https://lafabriqueaimpros.com/%C3%A9v%C3%A8nement/les-mardis-cest-derby-saison-3-fabrique-a-impros-diabolos-nantes/"
			},{
				name:"Championnat Nantais d’ImproCatch",
				date:new Date(Date.UTC(2022,02,31,21,00)),
				venue: "Nantes (44)",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/93cceceb-872e-190c-cedf-ef729ef200fa.jpeg",
				link:"https://lafabriqueaimpros.com/%C3%A9v%C3%A8nement/championnat-nantais-dimprocatch-14/"
			},{
				name:"JT pas prêt",
				date:new Date(Date.UTC(2022,03,2,18,30)),
				venue: "Nantes (44)",
				image:"https://gallery.mailchimp.com/5e087c6d40f3081c7f733c309/images/7d6d852b-5ce7-4ddb-ab20-066a6413efb8.jpg",
				link:"https://lafabriqueaimpros.com/%C3%A9v%C3%A8nement/jt-pas-pret/"
			},{
				name:"Match d'impro à Lille",
				date:new Date(Date.UTC(2022,02,26,20,00)),
				venue: "Nantes (44)",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/05e338b0-87b5-5346-03bb-ff5b4533e757.png",
				link:"https://www.helloasso.com/associations/cali-remo-international-company-la-cric/evenements/match-d-impro-la-cric-vs-les-diabolos-de-nantes"
			},{
				name:"Kabaraoké",
				date:new Date(Date.UTC(2022,03,02,21,00)),
				venue: "Cholet (49)",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/4be65ca8-125d-98ac-74f7-d135807d142c.jpg",
				link:"https://lafabriqueaimpros.com/programmation/"
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
