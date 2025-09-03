const fs = require('fs');

async function cleanDirExcept(dirPath, excepts) {
    if (fs.existsSync(dirPath)) {
        for (let file of fs.readdirSync(dirPath)) {
            if (!excepts.includes(file)) {
                console.log(`[removed] ${dirPath}/${file} `);
                fs.rmSync(`${dirPath}/${file}`);
            }
        }
    }

    return;
}

const writeMetaData = dirPath => {
    const currentDateString = new Date(Date.now()).toISOString();
    const metaDataPath = `${dirPath}/meta.json`;
    try {
        let origin = {};
        if (fs.existsSync(metaDataPath)) {
            origin = JSON.parse(fs.readFileSync(metaDataPath));
        }
        origin.updated = currentDateString.slice(0, 10);
        fs.writeFileSync(metaDataPath, JSON.stringify(origin), {flag: 'w'});
    } catch (error) {
        console.log(error);
    }
};

module.exports = {cleanDirExcept, writeMetaData};
