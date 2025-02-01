// Function to store user data in Firestore
function storeUserData(userData) {
  const db = firebase.firestore(); // Firestore instance

  // Add user data to the 'users' collection with user_id as document ID
  db.collection('users').doc(userData.user_id).set(userData)
    .then(() => {
      console.log('User added or updated successfully!');
    })
    .catch((error) => {
      console.error('Error adding/updating user:', error);
    });
}

// Example user data (this would typically come from the Telegram bot)
const userData = {
  user_id: 'user123',          // Telegram user ID (example)
  first_name: 'John',          // User's first name
  last_name: 'Doe',            // User's last name
  phone_number: '1234567890',  // User's phone number
  points: 0                    // User's points (initially 0)
};

// Store the example user data
storeUserData(userData);

// Function to update user points
function updateUserPoints(user_id, pointsToAdd) {
  const db = firebase.firestore(); // Firestore instance

  // Get the user document by user_id
  const userRef = db.collection('users').doc(user_id);

  // Increment the points by pointsToAdd
  userRef.update({
    points: firebase.firestore.FieldValue.increment(pointsToAdd)
  })
  .then(() => {
    console.log(`Points updated successfully!`);
  })
  .catch((error) => {
    console.error('Error updating points:', error);
  });
}

// Example of updating user points
updateUserPoints('user123', 10);  // This will add 10 points to user 'user123'
