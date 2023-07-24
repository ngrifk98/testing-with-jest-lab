## Testing Lab

This repository contains the code and test files for the **Testing Lab** project, which demonstrates how to write tests for JavaScript functions using Jest.

### Prerequisites

Before running the tests, make sure you have the following installed:

- Node.js (https://nodejs.org) - JavaScript runtime environment
- npm (Node Package Manager) - Comes with Node.js installation

### Installation

To set up the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/testing-lab.git
   ```

2. Navigate to the project directory:

   ```bash
   cd testing-lab
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running Tests

To run the tests, use the following command:

```bash
npm test
```

### Project Structure

```
├── functions.js       # Contains JavaScript functions to be tested
├── functions.test.js  # Contains test cases for functions.js
├── package.json       # Node.js package file with project dependencies
└── README.md          # Project documentation
```

### Functions

The `functions.js` file contains the following JavaScript functions:

- `returnTwo`: Returns the integer 2.
- `greeting`: Returns a greeting message with the provided name.
- `add`: Returns the sum of two numbers.
- `multiply`: Returns the product of two numbers.
- `divide`: Returns the result of dividing the first number by the second number.
- `subtract`: Returns the result of subtracting the second number from the first number.

### Tests

The `functions.test.js` file contains Jest test cases for each of the functions defined in `functions.js`.

### Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
