
Meme Generator

This is a simple React application that generates memes by fetching data from Imgflip API.

Table of Contents

    Installation
    Usage
    Function
    Contributing
    License

Installation

    Clone the repository: git clone https://github.com/username/meme-generator.git
    Navigate to the project directory: cd meme-generator
    Install dependencies: npm install

Usage

    Run the application: npm start
    Open the application in your browser: http://localhost:3000/
    Type your desired text in the "Top text" and "Bottom text" input fields.
    Click the "Get a new meme image" button to generate a random meme.

Function

    The Meme Generator is a web application that allows users to create custom memes by adding their own text to a random meme image obtained from an external API.

    The application is built using React and consists of two components: Header and Meme. The Header component displays the title and logo of the application. The Meme component contains the main functionality of the application.

    When the Meme component is loaded, it initializes the state of the application using the useState hook. The state includes the top and bottom text of the meme, and a default meme image obtained from the Imgflip API.

    The Meme component also fetches an array of meme images from the Imgflip API using the useEffect hook. The fetched memes are stored in another state variable called allMemes.

    When the user enters the top and bottom text of the meme and clicks the "Get a new meme image" button, the handleClick function is called. This function generates a random number between 0 and the length of the allMemes array and selects a random meme image from the array. The URL of the selected image is then used to update the randomImage property of the state using the setMemes function.

    The top and bottom text entered by the user are displayed on the selected meme image using the img and h2 tags in the JSX code. The text is displayed on top and bottom of the meme image according to the user's input.

    In summary, the Meme Generator uses React hooks to maintain the state of the application, fetches memes from an external API, and displays the selected meme image along with the user's text input to create a custom meme.


Contributing

Contributions are welcome! If you find a bug or want to suggest a new feature, feel free to create an issue or submit a pull request.
License

This project is licensed under the MIT License.