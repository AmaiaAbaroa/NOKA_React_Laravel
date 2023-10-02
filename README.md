# NOKA

![Under Development](https://img.shields.io/badge/status-under%20development-blue)

<br>

## Short description

NOKA is a web application, especially aimed at teachers of the public administration in active service in the BAC (Basque Autonomous Community).
Here they can find information and useful tools, especially in the management of day-to-day administrative processes. Such as: civil service examinations, transfer competitions, pay slips...
In addition to being an informative space, the website has other areas such as:

- ***Queries:*** where users can send their questions, save questions from other users in their profile as favourites or search for existing questions filtering by tags and by date.

- ***Calculator:*** where users can make personalised calculations of the administrative process scales, based on their own selected information. You can also save these results in your profile, classifying us according to the process to which you belong. 

- ***Profile:*** your own profile area, where you can store your own information, save and access the queries you are interested in, the results of your calculator, as well as edit or delete them. 

The main objective is to simplify the personal management of public workers and all the processes they have to carry out outside their educational field. 

<br>

## Quick video demo
![VideoDemo](/Noka-FrontEnd/src/assets/img/)

<br>

## Used tecnologies

<p align="center"> 
<a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
<a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> 
<a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a> 
<a href="https://laravel.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg" alt="laravel" width="40" height="40"/> </a> 
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
</p>

<br>

## My Figma MockUp 
![Figma](/Noka-FrontEnd/src/assets/img/MockUpNoka_Figma.PNG)


## User Stories
![UserStories](/Noka-FrontEnd/src/assets/img/HistoriasUsuario_NOKA.png)


## User Flow
![UserStories](/Noka-FrontEnd/src/assets/img/)

## DataBase Modeling
![DBModeling](/Noka-FrontEnd/src/assets/img/ModeladoDatos_DrawIO.PNG)

<br>

## Getting started


1. **Clone the Repository:**

```bash
git clone https://github.com/AmaiaAbaroa/NOKA_React_Laravel.git
```
 
2. **Install Dependencies:**

Run the following command to install all the required dependencies for the project:

```bash
cd Noka-BackEnd
composer install
php artisan key:generate
```
```bash
cd ..
cd Noka-FrontEnd
npm install
npm npm install react-router-dom
npm install axios
npm install react-modal
npm install react-js-pagination
```
3.**Database Setup: 🛠️ **

- Create a database in MySQL. 

- Duplicate and configure the .env file with your database credentials:

<br>

**env. file:**

```bash
FRONTEND_URL=http://localhost:3000
SESSION_DOMAIN=localhost
SANCTUM_STATEFUL_DOMAINS=localhost:3000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=DATABASE_PROJECT_NAME
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=cookie
SESSION_LIFETIME=120
```
4.**Then run the migrations to set up the database schema:**

```bash
php artisan migrate
php artisan migrate:fresh --seed
```

5.**Start the Development Server:**

Use the following command to start the Laravel development server and React development server:

```bash
php artisan serve
```
```bash
npm run dev
```
The backend will be accessible at http://localhost:8000.
The frontend will be accessible at http://localhost:5173.

## API routes:




<br>
<br>

## Created by

<br>
<br>

|[<img src="https://avatars.githubusercontent.com/AmaiaAbaroa" width=115 align="center" ><br><sub>AmaiaAbaroa</sub>](https://github.com/AmaiaAbaroa) 
| :---: |


