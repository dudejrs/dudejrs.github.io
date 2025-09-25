const {writeFileSync} = require('fs');

const {FileJob} = require('../../job');
const {CheckBoxFilter} = require('../../notion/filter');

const CertificateScheme = require('../../scheme/certificate');

async function fetchCertificate({path, client}) {
    const response = await client.queryDatabase(
        process.env.NOTION_CERTIFICATE_DATABASE_ID,
        CheckBoxFilter.Equals('_hidden', false).build(),
    );
    const ret = [];
    for await (let {results} of response) {
        for (let page of results) {
            ret.push(await CertificateScheme.convert(page, {client}));
        }
    }

    await writeFileSync(path, JSON.stringify(ret), {
        encoding: 'utf-8',
        flag: 'w+',
    });
}

module.exports = new FileJob({
    name: '자격증 목록을 fetch',
    path: `${process.env.PWD}/public/data/certificate.json`,
    exec: fetchCertificate,
    handleError: console.log,
});
