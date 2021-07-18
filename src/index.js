const ngrok = require("ngrok");
const { token } = require("./config");


(async () => {
  await ngrok.authtoken(token);
  const url = await ngrok.connect({ proto: "tcp", addr: 22});
  console.log(url)
})();
