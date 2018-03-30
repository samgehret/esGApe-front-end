#esGApe

##Description
In the modern day, consumers are faced with a plethora of decisions to make. Navigating these options is the goal of our project. esGape is a portal which allows users to sign in,and create detailed posts concerning the top restaurants and bars in the nearby area. Users can view individual restaurants in a show view, and edit and delete the information on their own posts, as well as comment on the posts of other users. The ultimate goal is a curated cache of the best lunch spots and bars in the area.

[Imgur](https://i.imgur.com/mPI15qE.png)
[Imgur](https://i.imgur.com/IE11SBM.png)

##User Stories

- As a User, I want to be able to sign up, so that I can log in.
- As a User, I want to be able to log in, so that I can make, edit, and delete my posts.
- As a User, I want to be able to log out, so that I can leave the site.
- As a User, I want to be able to see a list view of posts, so that I can see the entire selection and view individual posts.
- As a User, I want to be able to view individual posts in a show view, so that I can get all of the details on a specific restaurant or bar.
- As a User, I want to be able to create posts for new restaurants/bars , so that I can show other users cool places to eat.
- As a User, I want to be able to delete posts, so that I can hide my shame when I make a foolish post.
- As a User, I want to be able to edit posts, so that I can correct mistakes on my posts.
- As a User, I do not want other users to be able to edit or delete MY posts, lest they be a malicious user.
- As a User, I want to be able to view error messages when I fail to log in or sign up, so that I understand my mistake.
- As a User, I want to be able to submit comments, so that I can give my personal opinion on restaurants and bars.

##MVP
###Bronze
- full CRUD for restaurants and bars
- Authentication - sign up, sign in, log out.
- Posts have an author property, so you can only edit and delete your own posts.
- Users can comment on posts

###Silver
- Ability to tag images, and filter / search based on those tags
- Admin accounts
- Map showing pinned restaurants and bars

###Gold
- Users can upload images

##Technologies
HTML, CSS, JS, React, Node.js, Express, MongoDB, Github (using a git flow), JWTAuth, Materialize.css
Deployed using Heroku(backend) and Surge(frontend)

##Local Setup
1. Clone down both of these repositories.
https://github.com/samgehret/esGApe-back-end
https://github.com/samgehret/esGApe-front-end
2. Install dependencies using npm install in both the backend and frontend folders.
3. Navigate into the backend folder, then navigate into the DB folder and run seed.js with node, to seed your MongoDB collection.
4. In your terminal, run the backend server with nodemon app.js. Navigate to localhost:3002/lunchspots or localhost:3002/happyhours. You should see JSON on the page.
5. Go back to your terminal, navigate into the frontend folder, and run npm start. The page will then open up in chrome. (localhost:3000)
6. Do whatever you want on the site!

##Contributing
You can post issues / make pull requests on the backend and frontend repositories.

Thanks for reading!

#### Made by Sam Gehret, Samuel Haile, and Grant Brown