angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			{
				name:"Ce n'est pas qu'un slogan", 
				date: new Date(Date.UTC(2017,10,8)), 
				venue: "A l'Art Scène", 
				image:"slogan.jpg",
				link:"https://www.facebook.com/events/857084411117943/"
			},{
				name:"Match contre la LIPS de Montréal",
				date: new Date(Date.UTC(2017,9,6)),
				venue: "Au théâtre du Dix",
				image:"lips.jpg",
				link: "https://www.facebook.com/events/1496155943776145/"
			},{
				name:"Cabaret de rentrée",
				date:new Date(Date.UTC(2017,9,11)),
				venue: "A l'Art Scène",
				image:"rentree.jpg",
				link: "https://www.facebook.com/events/121428595210594/"
			},{
				name:"Cabaret avec le Cidre",
				date:new Date(Date.UTC(2017,9,11)),
				venue: "Au Louis Blanc",
				image:"cidre.jpg",
				link:"https://www.facebook.com/troupeducidre/photos/pb.305391092994425.-2207520000.1510507604./771188423081354/"
			},{
				name:"Match contre Sergent BoB",
				date:new Date(Date.UTC(2017,10,15)),
				venue: "Au café Pop",
				image:"sergentbob.jpg",
				link:"https://www.facebook.com/events/254091085119422/"
			},{
				name:"Défi Troupes Party contre Los Martos",
				date:new Date(Date.UTC(2017,10,17)),
				venue: "Au café de la Ribine",
				image:"losmartos.jpg",
				link:"https://www.facebook.com/events/511327269260138/"
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
		];
		actorList.actors.forEach(function(element) {
			if(element.photo ===""){
				element.photo = "logo.jpg"
			}
    	element.order= 0.5 - Math.random();
    });
	})
;