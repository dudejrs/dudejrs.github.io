const {PageScheme} = require('#/notion/PageScheme');
const {NestedProperty} = require('#/notion/property');

module.exports = new PageScheme('자격증', {
    이름: NestedProperty.Title('Name', 'title', '이름'),
    발급기관: NestedProperty.RichText('발급기관', '%5C%3CL%3A'),
    '등급/점수': NestedProperty.RichText('등급/점수', 'MpMP'),
    '취득 일자': NestedProperty.Date('취득 일자', '%5CzZQ'),
});
