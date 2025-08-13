const { BotManager, SimpleBot, config } = require('@ptcg/server');
const { CardManager } = require('@ptcg/common');

// Backend config
config.backend.address = '0.0.0.0';
config.backend.port = 12021;
config.backend.avatarsDir = __dirname + '/avatars';
config.backend.webUiDir = __dirname + '/packages/play/dist/ptcg-play';

// Storage config
config.storage.type = 'sqlite';
config.storage.database = __dirname + '/database.sq3';

// Bots config
config.bots.defaultPassword = 'bot';

// Sets/scans config
config.sets.scansDir = __dirname + '/scans';
config.sets.scansDownloadUrl = 'https://ptcg.ryuu.eu/scans'; // Server to download missing scans

// Define available sets
const { baseSets, exSets, standardSets, frSets } = require('@ptcg/sets');

const cardManager = CardManager.getInstance();

/*cardManager.defineFormat('Standard', [
  standardSets.setDiamondAndPearl,
  standardSets.setOp9,
  standardSets.setHgss,
  standardSets.setBlackAndWhite,
  standardSets.setBlackAndWhite2,
  standardSets.setBlackAndWhite3,
  standardSets.setBlackAndWhite4,
  standardSets.setSwordAndShield
]);

cardManager.defineFormat('EX Sets', [
  exSets.setRubyAndSapphire,
  exSets.setSandstorm
]);

cardManager.defineFormat('Base Sets', [
  baseSets.setBase,
  baseSets.setJungle,
  baseSets.setFossil
]);*/

cardManager.defineFormat('FR', [
  frSets.setsv01,
  frSets.setsv02,
  frSets.setsv03,
  frSets.setsv04,
  frSets.setsv05,
  frSets.setsv06,
  frSets.setsv06_5,
  frSets.setsv08,
  frSets.setswsh1,
  frSets.setswsh4,
  frSets.setswsh9,
  frSets.setswsh10,
  frSets.setswsh12,
  frSets.setswsh12_5,
  frSets.setdet1
]);

// Define bots
const botManager = BotManager.getInstance();
botManager.registerBot(new SimpleBot('bot'));

botManager.registerBot(new SimpleBot('botmetal'));
botManager.registerBot(new SimpleBot('botplante'));
botManager.registerBot(new SimpleBot('botpsy'));
