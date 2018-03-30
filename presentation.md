# Presentations

**Each member of the group** must participate in the presentation.

Each presentation will be at most ten minutes long. We recommend that you plan
your presentation ahead of time and practice running through it at least once.
Five minutes will then be allotted for questions from the class. Take turns
answering questions during the Q & A. We suggest the following structure:

## Introduction

- What's your app called?


- Who are your group members? Who had which responsibilities?


- Why is it useful? What is your "pitch"?


## Demonstrating Your App

- What are the integral features of your app?

## Demonstrating Your Code

- What was the most difficult part?

I had the most difficulty on getting my edit form to actually make a put request. There were two main problems. First of all, I had a typo in my backend that made the router.put function useless. So that typo took up about 3 hour of my life. But hey, that's coding. I also had a problem with the edit form; because I had set up the put request to send every single field in the edit form as part of the request body, that meant a user would have to fill in every single field again, even if they only wanted to edit a SINGLE field. My first approach was to try and set the default value of the fields to be equivalent to the properties of the post, which was being retrieved by a get request when the page was rendered. Unfortunately, I couldn't get this to work (it's complicated, I won't get too into it, but when I tried to set it up, it filled the fields with immutable string values.) I spent a long time struggling with this, and eventually Sam G pointed out that I could just set the state values when I made my initial get request when the page rendered, meaning that even if a user left a field blank in the edit form, instead of the request body's property value being sent as a blank string, it would send whatever the default property value was.


- What did you learn?

First of all, I need to avoid getting married to a single method of solving a problem. Sometimes, I need to step back and just think of a few different methods for approaching a problem.
Second of all, I need to actually spend less time staring at a problem, and more time just writing code, even if I think it won't work, because a lot of the time i'm just psyching myself out, and the code will end up working fine.
Third of all, I need to not let errors persist. I'm normally pretty good at this, but I wasted a lot of time because even after I tested my router.put function in the backend with POSTMAN and it didn't work, instead of figuring out why, I just hoped that something was wrong with POSTMAN and made my frontend axios.put request, so the problem was still lurking under the surface.

- What are you most proud of?

I'm proud of the fact that I spent a lot of time staying after hours, working on this project. On my last project, I lost my motivation midway through and that hurt me a lot.

## The Planning Process

- How did you arrive at this idea?

We just threw some ideas around on the first day. We 
- How did you decide who would have which responsibilities?
- What would you change about your planning process?

## The Workflow

- What [Git Workflow](https://git.generalassemb.ly/ga-wdi-lessons/git-teams#git-workflows) did you follow?
- What did you like about this workflow; what did you dislike?
- Did you run into any challenges with this workflow? How did you solve them?

## The Week

- What was your week like?
- Did you feel the Emotional Cycle of Change?
- How did you work together?

## Highs and Lows

- What worked well?
- What didn't?
- What features would you like to add?

## Presentation Schedule

Presentations will take place from 1:30pm - 3:00pm in our classroom.
Presentation order will follow the team numbering in [groups.md](groups.md).
