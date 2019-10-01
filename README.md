Hello, World! Welcome to my game of Tic-Tac-Toe.

This application allows users to play a simple game of Tic-Tac-Toe and keep track of the total games they have played. I created this project as part of General Assembly's Software Engineering Immersive Program and I hope you will get some enjoyment out of it!

Important Links:

https://reginapizza.github.io/ticTacToe/

Technologies Used:
HTML, CSS, JavaScript, jquery, AJAX, JSON, Bootstrap, Sass

User Stories:

As a user, I want my game to aesthetically pleasing so that I feel interested enough to stay on the page and play it.

As a user, I want clear messages when I interact with the webpage so I know what's going on and don't make mistakes

As a user, I want to be able to pick whether I'm X or O.

As a user, I want to know how many games I've won and lost and a percentage of that.

As a user, I'd like to have the computer play against me.

Planning Story:

When making this application, I began by starting with boilerplate html and added some main sections like a header for my page title, a section for authorizations with headers and forms, and a place for my gameboard. Then I started the process of user authentication with forms and calling the API, eventually working my way up to being able to sign up, sign in, change password, and sign out users. Next came the task of creating a gameboard, which I ran into trouble with by trying to make it by creating an HTML table. I quickly realized that divs styled with css were much better, so I added that and continued onward.
My next task was to start the game logic, which I picked up fairly quickly. I declared some initial variables like my gameboard cells (an array with 9 indeces of all empty strings), my player1 and player2, and that the currentPlayer is 'X'. For my winning conditions, I realized that there are certain conditions that will always result in a win, such as the cells being in indeces of [0,1,2,] or [2, 5, 8]. However, in order to avoid array iterations (at the suggestion of an instructor to save me from future headaches), I decided to hard code winning conditions. After putting in more functions for switching players, for how to determine a tie, and for what to do when a cell is clicked, I tackled API calls and made jQuery events to interact with user input. Finally, I added the function to display the total number of games played. To finish off the SPA, I styled with CSS using bootstrap and deciced to go with a color theme that was inspired by a mix of Twitch and Halloween.

Unsolved Problems:

I realized during final debugging that when a user is signed in, plays a game and shows their total games, then logs out and logs back in as another user, the previous user's total games number is still displayed on the screen.

I was also getting a bug where the #messageBox is not displaying after games where a user has signed out and then signed back in.

Both of these issues will likely be fixed in the coming updates.

For future updates, I would also like to add a total games won function to the player stats, and I would like to be able to have the player choose whether they can be X or O depending on their preference. Stay tuned to see how this project grows!

Images:

![Original Wireframe drawing for Tic Tac Toe SPA](https://i.imgur.com/KJCHgSS.jpg)

Update 1.1:

Bugs are fixed! Users will no longer have issues with messages not displaying or previous total games number showing after signing out and signing back in again.
