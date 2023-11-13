# Le nouveau site des Diabolos Nantes
## Mise à jour du contenu

### Mise à jour des dates
Pour mettre à jour les dates de spectacle sur le site, il faut aller dans le répertoire `_dates`.

### Ajouter une nouvelle date
Pour ajouter un nouveau spectacle, il faut créer un nouveau fichier. Je propose de lui donner un nom court puis la date au format aaaa-mm-jj. Par exemple : `catch-2023-11-25.md`
Dans le fichier il faut suivre le formalisme suivant :
```
---
title: TITRE
begin_date: DATE
duration: DUREE
img: IMAGE
venue: LIEU
address: ADRESSE
pricing: PRIX
cta_text: INCITATION_A_LACTION
cta_url: URL_EXTERNE
summary: DESCRIPTION_COURTE
spectacle: FORMULE
---
DESCRIPTION_LONGUE
```

Avec :
- TITRE 
	- Le nom du spectacle
	- Ex : Catch - Le bestiaire extraordinaire
- DATE 
	- La date et l'heure du spectacle
	- Format attendu : AAAA-MM-JJ HH:mm
	- Ex : 2023-11-25 20:30
-DUREE
	- La durée estimée du spectacle
	- pas de formalisme prédéfini on recopie ce qui est indiqué
	- Ex : `45 min` ou `entre 2h et 3h`
- IMAGE
	- le nom du fichier image (affiche)
	- il faut uploader cette image dans le dossier `assets/img/`
	- taille attendue 300px * 400px
	- Je recommande l'utilisation d'un outil pour fixer la taille (genre [ImageRezizer](https://imageresizer.com/fr) ou [Resizr](http://www.resizr.com/))
	- Ex : catch-bestiaire.jpg
- LIEU
	- le nom (commercial) du lieu qui nous accueille
	- Ex : Le Dix
- ADRESSE
	- l'adresse complète dui lieu qui nous accueille
	- Ex : 10 place des garennes, 44000 Nantes
- PRIX
	- le prix d'entrée au spectacle
	- Ex : Entrée libre
	- Ex : 10 €
- INCITATION_A_LACTION
	- Dans la page du spectacle il y a un bouton. C'est le texte à mettre dedans
	- Ex : RESERVER
	- Ex : PLUS D'INFORMATIONS
- URL_EXTERNE
	- Dans la page du spectacle il y a un bouton. C'est le lien vers lequel on redirige quand on clique dessus (Page Facebook, billeterie...)
	- Ex : https://www.billetweb.fr/catch-dimprovisation-bestiaire-extraordinaire
- DESCRIPTION_COURTE
	- Une courte description du spectacle 
	- 100 caractères maximum
	- Ex : Venez voir la grande ménagerie que les Diabolos Nantes vont installé au Dix.
- DESCRIPTION_LONGUE
	- Le description complète du spectacle 
	- Pas de limite de taille
	- Le [markdown](https://stackedit.io/app#) est autorisé
- FORMULE
	- La formule utilisée pour le spectacle
	- Mettre le short de la formule telle qu'indiquée dans le fichier du répertoire `_spectacles`
	- Ex : limpro_dont_vous_etes_le_hero

#### Modifier une date existante
Il suffit de corriger le fichier existant

#### Supprimer une date passée
Il suffit de supprimer le fichier correspondant. N'oubliez pas de supprimer également l'image associée.

### Mise à jour des formules

Cela fonctionne un peu comme les dates. Cela se trouve dans `_spectacles`. Voici le formalisme : 
```
---
short: SHORT
title: TITRE
img: IMG
summary: DESCRIPTION_COURTE
type: TYPE
audience: PUBLIC
---
DESCRIPTION_LONGUE
```
Avec :
- SHORT
	- un nom de code de la formule
	- sans caractères spéciaux, accents ou espaces
	- Ex : limpro_dont_vous_etes_le_hero
- TITRE 
	- Le nom de la formule
	- Ex : Catch 
- IMG
	- le nom du fichier image 
	- il faut uploader cette image dans le dossier `assets/img/`
	- taille attendue 300px * 400px
	- Je recommande l'utilisation d'un outil pour fixer la taille (genre [ImageRezizer](https://imageresizer.com/fr) ou [Resizr](http://www.resizr.com/))
	- Ex : catch.jpg
- DESCRIPTION_COURTE
	- Une courte description de la formule 
	- 100 caractères maximum
	- Ex : Une formule officielle qui met en avant toute l'énergie des Diabolos Nantes.
- TYPE
	- le type de la formule : longform ou shortform
	- il faut écrire exactement `longform` ou `shortform`
-PUBLIC
	- le public visé pour cette formule
	- Ex : Adultes et adolescent.e.s
- DESCRIPTION_LONGUE
	- Le description complète du spectacle 
	- Pas de limite de taille
	- Le [markdown](https://stackedit.io/app#) est autorisé

## Faire fonctionner le projet en local
Cette étape est réservé pour le développement du site

### Installation
Il faut avoir Ruby, RubyGems, GCC et Make sur son ordinateur. Voir [le guide d'installation](https://jekyllrb.com/docs/installation/).
Puis il suffit de faire un
```bundle install```

### Lancement
Faire
``` bundle exec jekyll serve ```

Cela doit créer un site temporaire qui va se mettre à jour à chaque modification de fichier.

### Structure du projet
J'ai suivi le tutoriel de Jekyll. Je vous laisse le consulter.
https://jekyllrb.com/docs/step-by-step/01-setup/

La seule collection ajoutée à l'heure actuelle ce sont les `dates`. J'imagine un jour ajouter `venues` et peut-être `formules`.

