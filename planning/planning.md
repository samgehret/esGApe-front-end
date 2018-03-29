# PROJECT IDEA

    Our project is esGApe; a portal which allows users to sign in,and create detailed posts concerning the top restaurants and bars in the nearby area. Users can view individual restaurants in a show view, and edit and delete the information on their own posts, as well as comment on the posts of other users. The website also has a map showing the locations of posted restaurants and bars.

## QUESTIONS

Redux: NO
Testing: NO
Authentication: YES
Map: YES
Who controls repo: Sam
Formatting: Tabs, no semicolons, single quotes

## NEW GENERAL METHODOLOGY FOR GITHUB

- Do work in our local individual branch
- git pull origin develop -> local develop
- git checkout individual branch
- git merge develop
- fix merge conflicts in vscode
- push local individual branch -> remote individual branch
- pull request develop <-> remote individual branch
- Done

## MVP

Bronze
- full CRUD for restaurants and bars
- Authentication - sign up, sign in, log out.
- Posts have an author property, so you can only edit and delete your own posts.
- Users can comment on posts

Silver
- Ability to tag images, and filter / search based on those tags
- Admin accounts
- Map showing pinned restaurants and bars

Gold
- Users can upload images, and (someone?) hosts them

make lat / long part of the model



GRANT TODO WEDNESDAY
- Make it so a login failure / signup failure doesn't redirect to homepage


Styling
- Input fields are too wide
- 


=======
- buttons only show when author === localStorage.email
- 


TODO OVERALL
- Make it so that 'website' renders a clickable URL on show view
- Make stuff look better
- Logo in top left
- make Navbar stretch to whole page
- color on form text
- Animation on mouseover for nav items
- After deployment, check URL's to make sure they all work
- sort comments and lunchspot / happyhour list view in reverse order
GRANT TODO THURDAY
- Fix URL redirects through surge (if they happen?)
- Round Images on front page.
- icons in navbar


KNOWN BUGS
- Login page not redirecting on successful login
- Comment fields not emptying after successful comment post
- Edit and Delete not being hidden.
