# PROJET RESTAURANT LE QUAI ANTIQUE

Dans le cadre d’une évaluation pour l’obtention du titre Développeur web et web mobile, j’ai décidé de séparer ce projet en deux applications. L’une générant le front-end avec React JS, l’autre générant une API REST et le backend avec le framework Symfony.

Ce dépot concerne la partie réalisée en REACT JS.

Pour en savoir plus sur la partie API, vous pouvez allez sur le dépôt suivant : [https://github.com/maeva-lnd/lqa_back-end](https://github.com/maeva-lnd/lqa_back-end)

Les annexes de ce projet se trouvent ici :  [https://github.com/maeva-lnd/lqa_annexes](https://github.com/maeva-lnd/lqa_annexes)

## Pré requis

Pour le bon fonctionnement de l'application, vous devez avoir déjà installé
- git [Lien de téléchargement](https://git-scm.com/)
- nodeJS version (>= 16.16.0) [Lien de téléchargement](https://nodejs.org/en)
- npm version (>= 8.17.0)

## Installation

Dans un premier temps, il va falloir récupérer le projet via git

```bash
git clone https://github.com/maeva-lnd/lqa_front-end
```

Ensuite il faut télécharger les dépendances. Pour cela placez vous dans le repertoire nouvellement créé et saisissez la commande

```bash
npm install
```

Pour finir, créez un fichier .env.local et mettez y les informations correpondant à l'API. Par exemple :

```bash
REACT_APP_API_BASE_URL = http://127.0.0.1:8000/
```
## Démarrer le serveur

Pour démarrer le serveur REACT, tapez la commande :

```bash
npm start
```