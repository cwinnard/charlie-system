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
];
const nouns = [
    'Bulldog',
    'Racecar',
    'Cocktail',
    'Statue',
    'Pumpkin',
    'Evergreen',
    'Mountain',
    'Lion',
    'Football',
    'Hat',
];

const generateJWT = () => {
    const x = 'token';
    return x;
};

const generateUsername = () => {
    const adj = _.sample(adjectives);
    const noun = _.sample(nouns);
    const num = Math.random().toFixed(2) * 100;
    return adj + noun + num;
};

module.exports = { generateJWT, generateUsername };
