EMAIL: X@gmail.com
PASSWORD: XXXXXX69
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### SearchBar Component:

The SearchBar component is responsible for rendering the search input field and the sorting filter dropdown. It provides a user interface for users to input search queries and select sorting options.

It receives two props: onSearch and onSort. These are callback functions passed from the parent component (SearchList) to handle search and sorting actions.
It contains the input field for users to enter search queries (TextField) and the dropdown for sorting options (Select).
It handles user input changes for search queries and sorting options with the handleInputChange and handleSortChange functions.
It updates the state of searchQuery and sortOrder using the useState hook.
It applies Material-UI styles and icons for a consistent and visually appealing user interface.

### SearchList Component:

The SearchList component is responsible for displaying a list of NFT items based on search and sorting criteria. It combines the functionality of filtering and sorting the NFT data.

It initializes state variables for filteredData, noMatches, and sortOrder using the useState hook.
It uses the useEffect hook to apply a transition effect to displayed NFT items when the data changes.
It contains the main layout structure of the component, including rendering the SearchBar component and the grid of NFT items.
It handles user search input and sorting options by passing the relevant callback functions to the SearchBar component.
It performs the actual filtering of NFT data based on the search query and applies sorting based on the selected sorting order.
It uses conditional rendering to display either the filtered NFT items or a "No matches found" message based on the noMatches state.
It applies Material-UI styles and CSS for layout and presentation.

### Summary (SearchBar, SearchList)

In summary, the SearchBar component is focused on providing search and sorting user interfaces, while the SearchList component manages the overall display of NFT items and handles the logic for filtering and sorting the data based on user input. These components work together to create a cohesive search and display experience for your NFT data.
