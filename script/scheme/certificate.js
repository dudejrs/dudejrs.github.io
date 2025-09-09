const {PageScheme} = require('../notion/scheme');
const {NestedProperty} = require('../notion/property');

module.exports = new PageScheme('자격증', {
    name: NestedProperty.Title('Name', 'title'),
    '취득 일자': NestedProperty.Date('취득 일자', '%5CzZQ'),
    '등급/점수': NestedProperty.RichText('등급/점수', 'MpMP'),
    발급기관: NestedProperty.RichText('발급기관', '%5C%3CL%3A'),
    Tags: NestedProperty.MultiSelect('Tags', '%40G_x'),
});
