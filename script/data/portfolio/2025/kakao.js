const {writeFileSync} = require('fs');
const {DirectoryJob} = require('../../../job');

// const tagList = [["Node.js", "Spring", "React", "Angular"]]

async function getData({client: _cleint, path}) {
    const ret = {};

    writeFileSync(`${process.env.PUBLIC_URL}/${path}`, JSON.stringify(ret), {
        encoding: 'utf8',
        flag: 'w+',
    });
}

module.exports = new DirectoryJob({
    name: '[portfolio] 2o025 Kakao]',
    path: `${process.env.PWD}/public/data/portfolio/2025/kakao`,
    exec: getData,
    handleError: console.error,
});
