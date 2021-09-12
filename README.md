# pi-anywhere
pi-anywhere is an app designed to allow connection between your Raspberry Pi and Discord. This allows you to send commands to it through a Discord channel, or connect to it via SSH through an ngrok tunnel.

## Installation / Configuration
* `git clone https://github.com/willuhm-js/pi-anywhere`
* `cd pi-ngrok`
* Edit the configuration in `src/config.js`
* `npm install`
* `node src/index.js`

## License
**pi-anywhere** is licensed under the [MIT License](https://github.com/willuhm-js/pi-anywhere/blob/master/LICENSE)

## Additional Note(s)
* This application uses `discord.js@11.5.3`. This package is currently deprecated but used by this application to allow usage on Raspberry Pi 0 devices.

* This application searches for a channel named "console" in your Discord server, please ensure that one exists.

* Please only add this bot to one server to avoid error.

* To run when your Raspberry Pi (or other system) boots, I recommend having it launch through the `/etc/rc.local` file. If your system has no such file, please research other methods.
