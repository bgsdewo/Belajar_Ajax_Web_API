// const jsonString = `{
//     "ticker": {
//       "base": "BTC",
//       "target": "IDR",
//       "price": "345001000.00000000",
//       "volume": "28.02287745",
//       "change": "-430000.00000000"
//     },
//     "timestamp": 1674472505,
//     "success": true,
//     "error": ""
//   }`;

// //convert JSON menjadi Objek Javascript
// const res = JSON.parse(jsonString);
// console.log(res.ticker.base); // Output: "BTC"
// console.log(res.ticker.price); // Output: "harga"

//versi dari JS menjadi JSON
// const data = {
//   ticker: {
//     base: "BTC",
//     target: "IDR",
//     price: "345001000.00000000",
//     volume: "28.02287745",
//     change: "-430000.00000000",
//   },
//   timestamp: 1674472505,
//   success: true,
//   error: "",
// };

// // Mengubah objek JS menjadi string JSON
// const jsonString = JSON.stringify(data);
// console.log(jsonString);

//topic Melakukan Request Dengan Xmlhttprequest
// const req = new XMLHttpRequest();

// let data;

// req.onload = function () {
//   data = JSON.parse(this.response);
//   //   const data = this.response;
//   console.log(data);
//   //   console.log(this);
// };

// req.onerror = function () {
//   console.log("Error", this);
// };

// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

//topic Melakukan Request Dengan Fetch
// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Could not fetch the data for that resource");
//     }
//     // console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("json 1", data);
//     return fetch("https://swapi.dev/api/people/2");
//   })
//   .then((res) => {
//     console.log("request 2");
//     if (!res.ok) {
//       throw Error("Could not fetch the data for that resource");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

//ada cara lagi
// const loadPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/peoplasjkdge/1");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/2");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (err) {
//     console.log("error", err);
//   }
// };

// loadPeople();

//Topic Melakukan Request Dengan Library Axios
// axios
// 	.get('https://swapi.dev/api/people123/1')
// 	.then((res) => {
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 		alert(err.message);
// 	});

// axios
// 	.get('https://swapi.dev/api/people123/1')
// 	.then((res) => {
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 		alert(err.message);
// 	});

// axios
//   .get("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//     alert(err.message);
//   });

// const getPeople = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//     console.log(error.message);
//     console.log(error.response.status);
//     console.log(error.response.data);
//   }
// };

// getPeople(131232131312321321122);
