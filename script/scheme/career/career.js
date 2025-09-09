const {PageScheme, NestedDatabaseScheme} = require('../../notion/scheme');
const {NestedProperty, RelationProperty} = require('../../notion/property');
const {CheckBoxFilter} = require('../../notion/filter');

module.exports = new PageScheme('경력', {
    '기업 이름': NestedProperty.Title('기업 이름', 'title'),
    '재직 기간': NestedProperty.Date('재직 기간', 'uhIK'),
    직무명: NestedProperty.RichText('직무명', 'sXie'),
    '사용 기술': new RelationProperty(
        '사용 기술',
        'WPPk',
        NestedProperty.Title('Name', 'title'),
    ),
    '업무 내용': NestedProperty.RichText('업무 내용', 'bDH%3E'),
    '업무 상세': NestedProperty.RichText('업무 상세', '_%5BgJ'),
    프로젝트: new NestedDatabaseScheme('프로젝트', {
        relation_property_name: '경력',
        database_id: '9fc064cd-84ef-49da-8dd9-73035160692a',
        scheme: new PageScheme('프로젝트', {
            이름: NestedProperty.Title('Name', 'title'),
            기간: NestedProperty.Date('기간', '%3Ekgu'),
            기술: new RelationProperty(
                '기술',
                '%7BN%5Cl',
                NestedProperty.Title('Name', 'title'),
            ),
            '주요 내용': NestedProperty.RichText('주요 내용', 'DMbh'),
            '기여한 점': NestedProperty.RichText('기여한 점', 'T%3Aiz'),
            성과: NestedProperty.RichText('성과', '%3FRkJ'),
        }),
        filter: CheckBoxFilter.Equals('_hidden', false),
    }),
});
