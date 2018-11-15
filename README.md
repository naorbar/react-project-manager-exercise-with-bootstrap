### This is a great React exercise with bootstrap, based on this tutorial: [React crash course in youtube](https://www.youtube.com/watch?v=A71aqufiNtQ)

#### To use react-bootstrap:

1. Install:

`npm install react-bootstrap`

`npm install bootstrap`

2. Import react-bootstrap's components:

`import Button from 'react-bootstrap/lib/Button';`

`import Alert from 'react-bootstrap/lib/Alert';`

`import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';`

`etc.`

OR in short:

`import { Button, Alert, Badge, Dropdown, DropdownButton, Container, ... } from 'react-bootstrap';`


3. Import bootstrap's styling:

`import * as bs from '../node_modules/bootstrap/dist/css/bootstrap.css';`

For more details, read react-bootstrap documentation [here](https://react-bootstrap.netlify.com/getting-started/introduction)


#### To start working on this project:

- `git clone` to clone the project
- `cd` to the app folder
- `npm install` to install all dependencies into the app folder
- `npm start` to start the server on http://localhost:3000
- open the project using Atom or any other IDE

To project was originally created using [Create React App](https://github.com/facebook/create-react-app)

#### The main concepts used in this app:

- The App contains a list of projects (static list) (Projects and Project components)
- The App contains a AddProject component, which allows adding a new Project to the list (using a callback function from AddProject.js i.e. child to App.js i.e. parent)
- Each project has a Delete function (another callback function from Project.js to Projets.js to App.js i.e. parent)
- The App contains a Todos list - this is a dynamic list based on an Ajax call to this development server: https://jsonplaceholder.typicode.com/
- Using react-bootstrap components, such as Button, Alert etc. as described [here](https://react-bootstrap.netlify.com/components/alerts)
