fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('bill-list');
    container.textContent = JSON.stringify(data, null, 2);
  })
  .catch(err => {
    console.error(err);
    document.getElementById('bill-list').textContent = 'Error loading data';
  });
