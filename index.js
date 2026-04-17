console.log(crypto.getRandomValues(new Uint16Array(10)));
crypto.getRandomValues(new Uint16Array(10)).map(num => console.log(num));