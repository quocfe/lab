// const fs = require('fs');
// const axios = require('axios');

// async function readData() {
//   const data = await fs.promises.readFile('./data.json', 'utf-8');

//   const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

//   console.log('Data loaded from disk', data);
//   console.log("Data downloaded from url", res.data);
// }


// readData();

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response =>response.json())
      .then(data => console.log(data))
