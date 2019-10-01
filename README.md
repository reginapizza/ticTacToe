Hello, World! Welcome to my game of Tic-Tac-Toe.

This application allows users to play a simple game of Tic-Tac-Toe and keep track of the total games they have played. I created this project as part of General Assembly's Software Engineering Immersive Program.

Important Links:


User Stories:

Planning Story:

When making this application, I began by starting with boilerplate html and added some main sections like a header for my page title, a section for authorizations with headers and forms, and a place for my gameboard. Then I started the process of user authentication with forms and calling the API, eventually working my way up to being able to sign up, sign in, change password, and sign out users. Next came the task of creating a gameboard, which I ran into trouble with by trying to make it by creating an HTML table. I quickly realized that divs styled with css were much better, so I added that and continued onward.
My next task was to start the game logic, which I picked up fairly quickly. I declared some initial variables like my gameboard cells (an array with 9 indeces of all empty strings), my player1 and player2, and that the currentPlayer is 'X'. For my winning conditions, I realized that there are certain conditions that will always result in a win, such as the cells being in indeces of [0,1,2,] or [2, 5, 8]. However, in order to avoid array iterations (at the suggestion of an instructor to save me from future headaches), I decided to hard code winning conditions. After putting in more functions for switching players, for how to determine a tie, and for what to do when a cell is clicked, I 















<!-- I'm sure you have heard of Tic-Tac-Toe before, but if you haven't then the rules are simple. Follow the on-screen instructions and try to make three in a row of either X's or O's.
The first player to go will always be player 1, who is represented by X's. Each player will go one time, and eventually there will either be a winner with three in a row, or it will be a tie with no one winning.

This project had a lot of 'firsts' for me. It was my very first web application made from scratch, my first time making API calls to a server on my own, and my first time having complete control over what my final product could look like (after meeting the minimum spec requirements of course). Learning coding, especially in an accelerated course, is not easy. This project was the biggest learning curve I have ever experienced, but I am happy that I made it through and proud of what I have been able to accomplish with only three weeks of experience.

When making this game, I started out first with a wireframe and user stories. I wanted my game to be visually appealing, simple to navigate, and I wanted it to be able to keep users interested by displaying player statistics such as a total games and total wins. To see my original wireframe for the project, you may view it at https://imgur.com/gallery/WJb6ZAl. While my final product did not end up lookly totally the way I expected, I like how my vision of the final product changed and I think with the time I was given it was a success.

Once it was time to start the game, I began by starting with boilerplate html and added some main sections like a header for my page title, a section for authorizations with headers and forms, and a place for my gameboard. Then I started the process of user authentication with forms and calling the API, eventually working my way up to being able to sign up, sign in, change password, and sign out users. Next came the task of creating a gameboard, which I ran into trouble with by trying to make it by creating an HTML table. I quickly realized that divs styled with css were much better, so I added that and continued onward.

My next task was to start the game logic, which I picked up fairly quickly. I declared some initial variable like my gameboard cells (an array with 9 indeces of all empty strings), my player1 and player2, and that the currentPlayer is 'X'. For my winning conditions, I realized that there are certain conditions that will always result in a win, such as the cells being in indeces of [0,1,2,] or [2, 5, 8]. However, in order to avoid array iterations (at the suggestion of an instructor to save me from future headaches), I decided to hard code winning conditions. After putting in more functions for switching players, for and for what to do when a cell is clicked, I had  -->
