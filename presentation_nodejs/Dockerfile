FROM node:14

# Création du répertoire de travail
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie des fichiers source de l'application
COPY . .

# Exposition du port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
