angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			{
				name:"La Nuit du Théâtre fait son Kabaraoké", 
				date: new Date(Date.UTC(2021,09,26,0,0)), 
				venue: "La Fabrique à impros (Nantes)", 
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/063539f0-7df3-536c-525e-f1528415e356.jpeg",
				link:"https://theatresnantais.wixsite.com/home/billetterie"
			},{
				name:"Putaclic",
				date: new Date(Date.UTC(2021,10,9,18,30)),
				venue: "La Fabrique à impros (Nantes)",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/ba1b9896-a7e2-a842-55da-09663aebf32a.jpg",
				link: "https://lafabriqueaimpros.com/programmation/#events"
			},{
				name:"Catch d'impro à l'anglaise",
				date:new Date(Date.UTC(2021,10,16,20,30)),
				venue: "Le Dix (Nantes)",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/37533d88-7975-cecd-5bb1-db7a6767d4c0.jpg",
				link: "https://www.facebook.com/events/121428595210594/"
			},{
				name:"Incroyables voyages",
				date:new Date(Date.UTC(2021,10,20,16,30)),
				venue: "Médiathèque René Goscinny (Sainte Luce-sur-Loire)",
				image:"https://gallery.mailchimp.com/5e087c6d40f3081c7f733c309/images/7d6d852b-5ce7-4ddb-ab20-066a6413efb8.jpg",
				link:"http://mediatheque.sainte-luce-loire.com/actualite/15-ans"
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
