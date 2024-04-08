### Project Overview

This project is a React application for displaying information about Pokémon. It fetches data from the PokeAPI to get a list of Pokémon and their abilities. The application provides pagination functionality to navigate through the list of Pokémon.

### How to Run the Project

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the development server with `npm start`.
5. Open your browser and go to `http://localhost:3000` to view the application.

### Components

#### App Component

The `App` component is the main component of the application. It manages the state for fetching Pokémon data from the PokeAPI and rendering the list of Pokémon and pagination components.

#### PokemonList Component

The `PokemonList` component receives props containing an array of Pokémon names and their corresponding abilities URLs. It fetches additional data about each Pokémon's abilities and renders a list of Pokémon cards with their abilities.

#### Sidebar Component

The `Sidebar` component provides a navigation sidebar with options to navigate to the home page, customize the page, and view Pokémon evolution. It uses icons for visual representation and supports opening and closing functionality. However, the buttons representing the various options are dummy buttons and require further improvement. This may include implementing functionality using the method: window.location.href = 'another-page.html';. However, this was not done due to the collision of project timing with university work and prioritizing visuals over dynamic transitions between pages.
 

#### Pagination Component

The `Pagination` component renders previous and next buttons for navigating between pages of Pokémon. It also includes a dropdown select menu for selecting a specific page.

### Styling

The project includes a CSS file (`style.css`) for styling the components. It defines styles for the header, Pokémon cards, sidebar, pagination, and other elements to create a visually appealing user interface.

### Additional Information

- The application uses Axios for making HTTP requests to the PokeAPI.
- Images for Pokémon types and abilities are imported as SVGs or PNGs.
- Pagination functionality is implemented to improve user experience when navigating through a large list of Pokémon.

### Dependencies

- React
- Axios

### Running the Tests

This project does not currently include tests. However, you can add testing frameworks such as Jest and React Testing Library to write and run tests for the components and functionality.

### Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please submit a pull request or open an issue on GitHub.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.