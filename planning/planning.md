# PROJECT IDEA

    Our project is esGApe; a portal which allows users to sign in,and create detailed posts concerning the top restaurants and bars in the nearby area. Users can view individual restaurants in a show view, and edit and delete the information on their own posts, as well as comment on the posts of other users. The website also has a map showing the locations of posted restaurants and bars.

## QUESTIONS

Redux: NO
Testing: NO
Authentication: YES
Map: YES
Who controls repo: Sam
Formatting: Tabs, no semicolons, single quotes


## RESTAURANT MODEL

restaurantName: String,
description: String,
distanceFromGA: Number,
avgMealPrice: Number,
cuisine: String,
createdAt: Number,
address: String,
rating: String,
phoneNumber: String,
hours: String,
photoURL: String,
comments: {
   name: String,
   content: String,
   createdAt: String,
}
postAuthor: String

## HAPPY HOUR / BAR MODEL
barType: String,
author: String,
barName: String,
avgBeerPrice: String,
createdAt: Number,
distanceFromGA: String,
dealsAndTimes: String,
ambiance: String,
crowds: String,
photoURL: String,
rating: String,
address: String,
description: String,
comments {
   name: String,
   content: String,
   createdAt: String
}
## GENERAL METHODOLOGY FOR GITHUB

- Do work in our local individual branch
- Push to our remote individual branch
- Pull request to 'develop' branch
- Git pull to our local individual branch

## MVP

Bronze
- full CRUD for restaurants and bars
- Map showing pinned restaurants and bars
- Authentication - sign up, sign in, log out.
- Posts have an author property, so you can only edit and delete your own posts.
- Users can comment on posts

Silver
- Ability to tag images, and filter / search based on those tags
- Admin accounts

Gold
- Users can upload images, and (someone?) hosts them
