function welcome(firstName, lastName) {
    // Combine the first name and last name with a space in between
    var fullName = firstName + ' ' + lastName;
  
    // Define the displayFullName function
    function displayFullName() {
      // Display a welcome message with the full name
      alert('Welcome ' + fullName + '!');
    }
  
    // Call the displayFullName function
    displayFullName();
  }
  
  // Example usage:
  welcome('John', 'Doe');
  