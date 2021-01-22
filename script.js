apiKey = "89109aba-8af2-4198-8b2f-9e9cec7aff7a"

// Coinmarketcap API doumentation: "https://coinmarketcap.com/api/documentation/v1/"


// ----------------------------------------------------------- //
// --Sample Code from Doumentation for Node.js installation-- //
// ----------------------------------------------------------- //

/* Example in Node.js ES6 using request-promise */

// const rp = require('request-promise');
// const requestOptions = {
//   method: 'GET',
//   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//   qs: {
//     'start': '1',
//     'limit': '5000',
//     'convert': 'USD'
//   },
//   headers: {
//     'X-CMC_PRO_API_KEY': '89109aba-8af2-4198-8b2f-9e9cec7aff7a'
//   },
//   json: true,
//   gzip: true
// };

// rp(requestOptions).then(response => {
//   console.log('API call response:', response);
// }).catch((err) => {
//   console.log('API call error:', err.message);
// });