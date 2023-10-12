// let name1 = "Quoc";
// let tuoi1 = "20";

// const sayHello1 = () => {
//   console.log(`I'm ${name1}. I'm ${tuoi1}`)
// }

// let name2 = "Nam";
// let tuoi2 = "23";

// const sayHello2 = () => {
//   console.log(`I'm ${name2}. I'm ${tuoi2}`)
// }




// const API = 'https://jsonplaceholder.typicode.com/';
// const ul = document.querySelector('ul');

// async function fetchData(endpoint) {
//   try {
//     const response = await fetch(`${API}${endpoint}`);
//     const data =  response.json();
//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//     return [];
//   }
// }

// async function handleButtonClick(event) {

//   sayHello1();
//   sayHello2();

//   const { dataset } = event.target;
//   const { endpoint } = dataset;

//   try {
//     const data = await fetchData(endpoint);

//     data.forEach(item => {
//       const { title } = item;
//       const li = `<li>${title}</li>`;
//       ul.innerHTML += li;
//     });
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// const btn = document.querySelector('button');
// btn.addEventListener('click', handleButtonClick);

