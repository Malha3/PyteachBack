<p align="center">
  <a href="https://github.com/meddouribadis/pyteach-front">
    <img src="https://ammib2018.sciencesconf.org/data/pages/logoUEVE.jpg" alt="Logo" width="430">
  </a>
</p>

  <h3 align="center">Projet AOS : PyTeach Serveur API</h3>

  <p align="center">
    Professeur : <strong>Franck Ledoux</strong>
    <br />
    <a href="https://github.com/meddouribadis/pyteach-front">Lien vers le repo front</a>
    ·
    <a href="https://github.com/meddouribadis/DLL_CasContact_Front/issues">Report a bug</a>
  </p>

- [A propos du projet](#a-propos-du-projet)
- [Swagger](#swagger)
- [Auteurs](#auteurs)

## A propos du projet

#### Le serveur est basée sur les technologies suivantes :

* [Express](https://expressjs.com/fr/)
* [Sequelize](https://sequelize.org/)
* [APIDoc](https://apidocjs.com/)
* [cors](https://www.npmjs.com/package/cors)
* [joi](https://github.com/sideway/joi)

## Installation

Clonez ce repository et installez les dépendances à l'aide des commandes suivantes :

`npm install` et `npm install` 

Modifiez le fichier `.env` à la racine pour le faire pointer sur votre base de donnée locale :

```
PORT=4040
DB_NAME=pyteach
DB_USER=pyteach_user
DB_PORT=8889
DB_PASS=covid19
DB_HOST=localhost
```

Modifiez également le fichier `/config/config.json` avec vos informations de base de données :

```json
{
  "development": {
    "username": "pyteach_user",
    "password": "covid19",
    "database": "pyteach",
    "host": "127.0.0.1",
    "port": "8889",
    "dialect": "mysql"
  }
}

```

Assurez vous que votre serveur SQL est bien démarré puis lancez le projet à l'aide de la commande : `npm start`

## Swagger

Pour générer le Swagger, il suffit d'installer APIDoc à l'aide de la commande suivante :

`npm install apidoc -g`

et de générer la documentation à la racine de ce projet avec la commande :

`apidoc -i routes/ -o apidoc/`

Une fois générée, le Swagger se trouve à l'adresse suivante : http://localhost:4040/apidoc

## Auteurs

- Malha Ait Mohammed
- Lauraine Houraga
- Badis Meddouri

