angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			{
				name:"Catch d'impro : les héros de notre enfance",
				date:new Date(Date.UTC(2022,01,26,21,00)),
				venue: "Montaigu (85)",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/df99f39d-0c21-7332-c218-f4674b447cc0.jpeg",
				link:"https://www.helloasso.com/associations/association-heyoka/evenements/les-hilairantes"
			},{
				name:"Autour du livre",
				date:new Date(Date.UTC(2022,01,26,15,00)),
				venue: "Clisson (44)",
				image:"https://gallery.mailchimp.com/5e087c6d40f3081c7f733c309/images/7d6d852b-5ce7-4ddb-ab20-066a6413efb8.jpg",
				link:"https://www.mediatheque-clisson.net/cms/articleview/id_profil/29/id/320"
			},{
				name:"Autour du livre",
				date:new Date(Date.UTC(2022,02,6,16,00)),
				venue: "Nantes (44)",
				image:"https://gallery.mailchimp.com/5e087c6d40f3081c7f733c309/images/7d6d852b-5ce7-4ddb-ab20-066a6413efb8.jpg",
				link:"https://www.facebook.com/events/241036584868683/"
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
