angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			{
				name:"Politiquement incorrect",
				date:new Date(Date.UTC(2021,10,06,18,30)),
				venue: "La Fabrique à impros",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/fdc28007-d61f-7f01-49b2-55d81922ceee.jpg",
				link:"https://lafabriqueaimpros.com/%C3%A9v%C3%A8nement/politiquement-incorrect/"
			},{
				name:"Mardi c’est derby avec les Lutins givrés",
				date:new Date(Date.UTC(2021,10,23,21,00)),
				venue: "La Fabrique à impros",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/ef86a908-1b02-2d34-72c8-18be6d279bc4.jpeg",
				link:"https://lafabriqueaimpros.com/%C3%A9v%C3%A8nement/les-mardis-cest-derby-saison-3-lutins-givres-diabolos-nantes/"
			},{
				name:"Le zapping",
				date:new Date(Date.UTC(2021,11,11,21,00)),
				venue: "Belle de Jour",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/0d70e969-b86d-128f-ba13-5565db412fe6.png",
				link:"https://www.facebook.com/diabolosnantesimpro/"
			},{
				name:"Scènes de ménage",
				date:new Date(Date.UTC(2021,10,03,20,30)),
				venue: "Belle de Jour",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/234cc8a4-3de9-423a-e498-831a60cd0047.png",
				link:"https://www.facebook.com/events/276613521019350/"
			}
		];
	})
	.controller('ActorsListController',function(){
		var actorList = this;
		actorList.actors = [
			{name: "Guillaume",photo : "guillaume_wolf.jpg"},
			{name: "Arnaud",photo : "arnaud_mesnard.jpg"},
			{name: "Stephane",photo : "stephane_baikoff.jpg"},
			{name: "Magali",photo : "magali.jpg"},
			{name: "Sylvain",photo : "sylvain.jpg"},
			{name: "Juliette",photo : "juliette.jpg"},
			{name: "Julie",photo : "julie.jpg"},
			{name: "Adiren G",photo : "adrieng.jpg"},
			{name: "Anaïs",photo : "anais.jpg"},
			{name: "Frederic",photo : ""},
			{name: "Adrien D",photo : ""},
			{name: "Aude",photo : ""},
			{name: "Carole",photo : ""},
			{name: "Laurence",photo : ""},
			{name: "Christophe",photo : ""},
			{name: "Eleonore",photo : ""},
			{name: "Johann",photo : ""},
			{name: "Pierre-Jean",photo : ""},
			{name: "Lola",photo : ""},
		];
		actorList.actors.forEach(function(element) {
			if(element.photo ===""){
				element.photo = "logo.jpg"
			}
    	element.order= 0.5 - Math.random();
    });
	})
;
