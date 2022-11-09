angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			{
				name:"Catch d'impro - Il était une fois au pays des contes",
				date:new Date(Date.UTC(2022,10,19,20,30)),
				venue: "Le Dix - 10 place des garennes - Nantes",
				Price: "tarif : 5 €",
				image:"https://urlz.fr/joIg",
				link:"https://www.facebook.com/events/1169545483660550?ref=newsfeed"
			},
			{
				name:"Les jeudis c'est Derby",
				date:new Date(Date.UTC(2022,10,24,21,00)),
				venue: "La Fabrique à impros - 14 rue de l'arche sèche - Nantes",
				Price: "tarif : 8€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/1a087a03-8d2d-6208-4f36-59721e5af934.jpeg",
				link:"https://lafabriqueaimpros.com/produit/les-jeudis-cest-derby-5/"
				
			},
		        {
				name:"La vie secrète des livres",
				date:new Date(Date.UTC(2022,10,26,16,00)),
				venue: "Bibliothèque de Château Thébaud - 16 rue de l'abbé Ménardeau - 44690 Château Thébaud",
				Price: "Entrée libre - Réservation obligatoire",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/483f0e26-10a8-647b-99df-874f0feff1a8.jpg",
				link:"https://docs.google.com/forms/d/e/1FAIpQLScvjAbiSKXN2zisZ2Cv887hlf11RO-W8GM-97Yacpaz_8Kc_Q/viewform"
				
			},
			{
				name:"Championnat Nantais d'Improcatch - Saison 2",
				date:new Date(Date.UTC(2022,11,04,18,30)),
				venue: "La Fabrique à impros - 14 rue de l'arche sèche - Nantes",
				Price: "tarif : 8€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/717dd047-ec5d-8b15-02f7-bf898b725967.jpg",
				link:"https://lekiosquenantais.fr/l-agenda/championnat-nantais-d-improcatch-venez-voter-pour-votre-equipe-d-improvisateurs-preferee"
			},
			{
				name:"le JT pas prêt",
				date:new Date(Date.UTC(2022,11,10,18,30)),
				venue: "La Fabrique à impros - 14 rue de l'arche sèche - Nantes",
				Price: "tarif : 8€",
				image:"https://mcusercontent.com/5e087c6d40f3081c7f733c309/images/11ebed65-3be5-8810-2ef5-7c04698f256e.png",
				link:"https://lafabriqueaimpros.com/produit/jt-pas-pret/"
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
