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
