# **📖 READ ME DU PROJET FOR EACH LIVRET 📖**

Bienvenue dans le projet **For Each Livret** !  
Ce projet utilise les technologies suivantes :  

- **⚛️ React** pour l'interface **FRONT**.  
- **🌐 NodeJS/Express** pour l'API **BACK**.  
- **🐘 PostgreSQL** pour la **base de données** (BDD).


## **📦 Structure du projet :**

Voici les différentes parties à cloner :  
- **FRONT :** 📂 [Livret Frontend](https://github.com/foreach-academy/livret-frontend-1)  
- **BACK :** 📂 [Livret Backend](https://github.com/foreach-academy/Livret--Backend)  
- **BDD :** 🗄️ Base de données à créer à partir du fichier `db.sql`.  


## **🚀 Pour lancer ce projet :**

### **Étapes générales :**

1. **🛠️ Installer les dépendances :**
   - Allez dans chaque dossier (`Frontend` et `Backend`) et exécutez :  
     ```bash
     npm install
     ```

2. **🔧 Configurer les variables d'environnement :**  
   - Créez un fichier `.env` dans chaque dossier.   
   - Ajoutez toutes les variables d'environnement nécessaires.
   
   > **⚠️ Note importante :**  
     Les variables d'environnement **ne doivent jamais être partagées**. C'est pourquoi le fichier `.env` est inclus dans le `.gitignore`.

3. **📜 Exécuter le script de base de données :**  
   - Lancez le fichier `db.sql` dans votre instance PostgreSQL pour créer les tables nécessaires.  

### **Commandes disponibles :**

Dans le fichier `package.json`, vous trouverez les commandes suivantes :  

- **▶️ `npm run start` :**  
  Lancer l'application en mode production.    

## **🌟 Bonnes pratiques :**

1. **📂 Organisation des fichiers :**
   - Respectez l'arborescence des dossiers.  
   - Consultez la charte de nommage pour un code propre et maintenable.  

2. **🔒 Gestion des secrets :**
   - **Ne partagez jamais vos variables `.env`.**   

3. **📥 Clonage rapide :**
   - Clonez les deux dépôts dans un même répertoire pour simplifier la navigation.  