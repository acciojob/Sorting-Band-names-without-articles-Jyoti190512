// Array of band names
let bandNames = ['The Rolling Stones', 'Red Hot Chili Peppers', 'Led Zeppelin', 'Aerosmith', 'The Beatles'];

// Function to remove articles from band names
const removeArticles = (name) => {
  return name.replace(/^(a|an|the)\s+/i, '');
};

// Sorting the band names in lexicographic order excluding articles
bandNames.sort((a, b) => {
  const nameA = removeArticles(a);
  const nameB = removeArticles(b);
  return nameA.localeCompare(nameB);
});

// Accessing the <ul> element with id 'band'
const ulElement = document.getElementById('band');

// Creating and appending <li> elements for each band name
bandNames.forEach((name) => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});



