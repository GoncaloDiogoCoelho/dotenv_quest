if (process.env.NODE_ENV) {
    require('dotenv').config({
        path: `${__dirname}/.env.${process.env.NODE_ENV}`,
    });
} else {
    require('dotenv').config();
}

console.log(`I am ${process.env.MY_NAME}, I am from ${process.env.MY_CITY} and I love ${process.env.MY_LANGUAGE}` );
