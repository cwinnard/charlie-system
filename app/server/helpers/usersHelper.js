const _ = require('lodash');

const adjectives = [
    'Feisty',
    'Spicy',
    'Killer',
    'Fancy',
    'Special',
    'Rockin',
    'Wonderful',
    'Gigantic',
    'Mini',
    'Loud',
    'Hairy',
    'Cozy',
    'Comfy',
    'Slippery',
];

const nouns = [
    'Bulldog',
    'Racecar',
    'Cocktail',
    'Statue',
    'Pumpkin',
    'Burrito',
    'Mountain',
    'Lion',
    'Football',
    'Hat',
    'Berry',
    'Flag',
    'Planet',
    'Squirrel',
    'Candle',
];

const generateJWT = () => {
    const x = 'token';
    return x;
};

const generateUsername = () => {
    const adj = _.sample(adjectives);
    const noun = _.sample(nouns);
    const num = Math.random() * 100;
    return adj + noun + num.toFixed(0);
};

module.exports = { generateJWT, generateUsername };
