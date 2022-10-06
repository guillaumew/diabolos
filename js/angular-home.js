angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			{
				name:"Politiquement incorrect",
				date:new Date(Date.UTC(2022,09,22,18,30)),
				venue: "La Fabrique à impros - 14 rue de l'arche sèche - Nantes",
				Price: "tarif : 8,99 €",
				image:"https://lafabriqueaimpros.com/wp-content/uploads/2022/04/politiquement-incorrect.jpg",
				link:"https://lekiosquenantais.fr/l-agenda/politiquement-incorrect"
			},
			{
				name:"Autour des livres",
				date:new Date(Date.UTC(2022,09,29,16,00)),
				venue: "Médiathèque de la Plaine sur Mer - 1 rue de la libération",
				Price: "Entrée libre",
				image:"https://mediatheque.laplainesurmer.fr/data/mediatheque.laplainesurmer.fr/application/node/313926/thumb.jpg?v=1663923177",
				link:"https://mediatheque.laplainesurmer.fr/ca-bouge"
				
			},
		        {
				name:"Championnat Nantais d'ImproCatch (CNIC) - saison 2",
				date:new Date(Date.UTC(2022,10,06,18,30)),
				venue: "La Fabrique à impros - 14 rue de l'arche sèche - Nantes",
				Price: "tarif : 8,99 €",
				image:"https://lafabriqueaimpros.com/wp-content/uploads/2022/09/invites-du-manoir-768x1024.jpg",
				link:"https://lafabriqueaimpros.com/championnat-nantais-improcatch-saison-2/les-mysterieux-invites-du-manoir"
				
			},
			{
				name:"Catch d'impro - Il était une fois au pays des contes",
				date:new Date(Date.UTC(2022,10,19,20,30)),
				venue: "Le Dix - 10 place des garennes - Nantes",
				Price: "tarif : 5 €",
				image:"https://urlz.fr/joIg",
				link:"https://www.facebook.com/events/1169545483660550?ref=newsfeed"
				
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
