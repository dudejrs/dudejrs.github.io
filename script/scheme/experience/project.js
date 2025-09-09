const {PageScheme, NestedDatabaseScheme} = require('../../notion/scheme');
const {NestedProperty, RelationProperty} = require('../../notion/property');

module.exports = new PageScheme('프로젝트', {
    이름: NestedProperty.Title('이름', 'title'),
    기간: NestedProperty.Date('기간', 'UocS'),
    태그: NestedProperty.MultiSelect('태그', 'yJPS'),
    기술: new RelationProperty(
        '기술',
        'YmTS',
        NestedProperty.Title('Name', 'title'),
    ),
    '요약(50자)': NestedProperty.RichText('요약(50자)', '%7CN%3AE'),
    '요약(200자)': NestedProperty.RichText('요약(200자)', '%3Aa%5D%5B'),
    프로젝트URL: NestedProperty.URL('프로젝트URL', 'PrOR'),
    이미지URL: NestedProperty.URL('이미지URL', 'MQRP'),
    '세부 경험': new NestedDatabaseScheme('세부 경험', {
        relation_property_name: '🌳 프로젝트',
        database_id: process.env.NOTION_EXPERIENCE_DETAIL_DATABASE_ID,
        scheme: new PageScheme('세부사항', {
            이름: NestedProperty.Title('Name', 'title'),
            기간: NestedProperty.Date('Date', 'iCuT'),
        }),
    }),
});
