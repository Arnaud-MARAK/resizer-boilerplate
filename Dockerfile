FROM node:14

MAINTAINER Arnaud MARAK <arnaudmarak@tutanota.com>

# Initialisation de l'endroit pour lancer les commandes
WORKDIR /app

COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie des fichiers de l'appli dans l'image
COPY . .

# On définit le port sur 1337
EXPOSE 1337


# Commandes nécessaire
# Création de l'image :
# sudo docker build -t sails-tp .

# Création du conteneur :
# sudo docker run -it --name sails-tp sails-tp

# Lancer le docker compose en installant les dépendences supplémentaires :
# sudo docker-compose run web npm install

# Réalise les 3 requêtes précédentes en un
# sudo docker-compose up --build

# Suppression des volumes
# sudo docker-compose down -v