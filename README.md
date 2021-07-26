# pi-ngrok
pi-ngrok is an app designed to alert you via Discord webhook with a Ngrok TCP IP when your Raspberry Pi starts, allowing for easy SSH connections.

## Installation / Configuration
* `git clone https://github.com/willuhm-js/pi-ngrok`
* `cd pi-ngrok`
* Edit the configuration in `src/config.js`
* `npm install`
* `node src/index.js`

## License
**pi-ngrok** is licensed under the [MIT License](https://github.com/willuhm-js/pi-ngrok/blob/master/LICENSE)

## Additional Note(s)
* Feel free to fork this repository and create different variants. I am willing to add other versions (perhaps a version that uses HTTP or ports to VNC instead of TCP/SSH) to new branches; credit will be given.

* To run when your Raspberry Pi (or other system) boots, I recommend having it launch through the `rc.local` file. If your system has no such file, please research other methods.
