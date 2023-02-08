require('dotenv').config()
const { SlashCommandBuilder } = require('discord.js')
const { connectionChar } = require("../helpers/conn");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Player count in HT WoW'),
  async execute (interaction) {
    connectionChar.query(
      "SELECT name FROM characters WHERE online = 1",
      (error, results, fields) => {
        if (error) {
          console.error(error);
          return interaction.reply("Something went wrong. Ask @MGMT for help.");
        }
        const count = results.length();
        const names = results.join(",");
        console.log(results);
        console.log(names);
        console.log(count);
        return interaction.reply(`${count} Players online: ${names}`);
      }
    );
  }
}
