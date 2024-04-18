# Project Name
************************************************************************************************************************

# Description

This React application is a To-Do List. It allows users to add tasks, mark them as complete, and delete them. The application consists of the following key features:

   * Adding Tasks: Users can input their tasks into the input box and click the "Add" button to add them to the list.
   * Displaying Tasks: The added tasks are displayed in a list format below the input box.
   * Deleting Tasks: Users can delete tasks by clicking the "Delete" button next to each task.
   * Logo: The application includes a logo displayed at the top of the To-Do List.

Html Code 
<body>: Contains the visible content of the web page.
  
<div id="root"></div>: Provides a placeholder <div> element with the ID "root" where the React application will be rendered. This is typically the entry point for React applications.

<script type="module" src="./src/index.js"></script>: 
  
 Links an external JavaScript file (index.js) to the HTML document. This JavaScript file is written using ECMAScript modules (type="module"), and it's the entry point for the React application. It likely contains the necessary code to bootstrap the React application and render it inside the <div> element with the ID "root".

 
***********************************************************************************************************************************************************


# Code Overview

The main functionality of the application is implemented in the App component:

    State Management: Utilizes React hooks (useState) to manage the state of input data (inputData) and the list of items (items).
    Adding Items: The additem function adds the input data to the list of items when the "Add" button is clicked.
    Deleting Items: The deleteItem function removes an item from the list when the "Delete" button is clicked.
    Rendering: The App component renders the UI elements, including the input box, "Add" button, task list, and delete buttons.

The line import { LOGO_URL } from "./utils/mockdata";

imports the LOGO_URL constant from a file named mockdata.js in the utils directory. This constant likely stores the URL of an image file, such as a logo, used within the React components of the project.

const [inputData, setInputData ]  = useState();
const [items, setItems] = useState([]);

These lines initialize state variables inputData and items using the useState hook.

    inputData is a state variable that holds the value of user input in a form field.
    items is a state variable that stores an array of items, such as tasks in a to-do list.

These state variables enable dynamic updating of the UI based on user interactions, such as adding new tasks or updating input values.

These functions handle the addition and deletion of items in the to-do list:

    *addItem: Adds the inputData (user-entered task) to the items array if it's not empty, then clears the input field.
    *deleteItem: Removes an item from the items array based on its index (id) using the filter method, then updates the state with the new array without the deleted item.

This JSX code represents the UI structure of the to-do list application:

   * It consists of a container with the class name "container" containing the entire to-do list.
   * Inside the container, there's a section with the class name "todo-app" representing the main to-do list area.
   * The <h2> element displays the title "To-Do List" along with an image sourced from LOGO_URL.
   * Below the title, there's a row containing an input field for adding new tasks and an "Add" button.
   *The value of the input field is controlled by the inputData state variable, and its onChange event updates the inputData state with the user input.
   * Clicking the "Add" button triggers the addItem function to add the task to the list.
   * Below the input row, there's a section with the class name "showItems" where the list of tasks is displayed.
   * The map function iterates over the items array and renders each task as a <div> with the class name "eachItem".
   * Each task is displayed within an <h3> element, and a "Delete" button is provided to remove the task from the list when clicked. The deleteItem function is called with the index of the task to be deleted.


