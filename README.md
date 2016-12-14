[Front-End Deployed Site](https://jdaly04.github.io/full-stack-front-end/)
[Back-End Deployed Site](https://calm-crag-10008.herokuapp.com/)
[Back-End Github Repo](https://github.com/jdaly04/full-stack-project-back-end)

APP EXPLANATION:
This is a full-stack CRUD application that allows users to create multiple libraries, update those libraries (by name), and delete his/her libraries (also by name). In future releases, a user will be able to add fundraisers to different libraries, based on fundraiser type (i.e. Autism, Heart Disease, etc.) Upon page load, a user is able to view all fundraisers in the database but is instructed to sign up and in before being able to create, update, and delete his/her libraries.

TOOLS USED / DEVELOPMENT PROCESS:
The front-end is built using Boostrap, HTML5 and CSS3. The back-end is built out in Ruby on Rails. I started the development process by creating user stories for the back-end to map out how the relationships between the "user" table, "fundraisers" resource, and "libraries" resoucrce (a join table) should be constructed for a user to accomplish his/her goals.

From there, I built out the wireframes based on the individual user stories. Once those were developed, I set up the back-end to ensure the tables were set up properly. I added seed data to the fundraisers table for testing purposes, and I utilized curl requests to test the back-end functionality before tackling front-end successes. I then took a methodical approach to implement one CRUD action at a time with button creation, event handling, ajax calls, and console.logs to test and confirm front-end successes.

Once all front-end CRUD was working, I implemented Handlebars for rendering JSON in the browser.

UNRESOLVED PROBLEMS:
  - An unmet user story: As a user, I want to be able to add fundraisers to my created libraries. This is a top priority for next feature implementation.
  - In order to meet the aforementioned user need, I need to likely adapt my ERD and potentially create an additional join table.
  - The overall UI could improved.

USER STORIES:
As a user, I'd like to be able to create multiple libraries to hold the various fundraisers I'm interested in attending / donating / sharing.
As a user, I'd like to have my libraries only be viewable and editable by me.
As a user, I'd like to be able to view all the fundraisers in the database.
As a user, I'd like to be able to make changes to by libraries.
As a user, I'd like to be able to delete a library altogether.
As a user, I'd like to be able to sign out.

WIREFRAMES:
[Landing Page Wireframe](http://imgur.com/TdTXb5A)
[On Sign-In Wireframe](http://imgur.com/2BtBaDR)
[On Get Libraries Wireframe](http://imgur.com/a1wSlmE)
