function submitData(name, email) {
  const url = 'http://localhost:3000/users';
  const data = {
    name: name,
    email: email
  };

  // Return the entire fetch chain
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Unauthorized Access");
    }
    return response.json();
  })
  .then(data => {
    // Append the new id to the DOM
    const idElement = document.createElement('div');
    idElement.textContent = data.id;
    document.body.appendChild(idElement);
  })
  .catch(error => {
    // Append the error message to the DOM
    const errorElement = document.createElement('div');
    errorElement.textContent = error.message;
    document.body.appendChild(errorElement);
  });
}