const {writeFileSync} = require('fs');

const {FileJob} = require('../../job');
const {MonthActivitesScheme} = require('../../scheme/activities');

async function fetchActivitiesPerMonth({path, client}) {
    const d = await MonthActivitesScheme.convert(undefined, {client});
    await writeFileSync(path, JSON.stringify(d), {
        encoding: 'utf-8',
        flag: 'w+',
    });
}

module.exports = new FileJob({
    name: `월별 활동내역을 fetch`,
    path: `${process.env.PWD}/public/data/activities/month.json`,
    exec: fetchActivitiesPerMonth,
    handleError: console.log,
});
