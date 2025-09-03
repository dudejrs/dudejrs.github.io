const {PageScheme} = require('../../notion/scheme');
const {NestedProperty, ComputedProperty} = require('../../notion/property');
const {NumberType} = require('../../notion/property/type');

module.exports = new PageScheme('코딩연습 카테고리', {
    name: NestedProperty.Title('Name', 'title'),
    count: ComputedProperty.Formula('count_', 'dAmW', new NumberType()),
    repetition: ComputedProperty.Formula(
        'repetition_',
        '%5BZvN',
        new NumberType(),
    ),
    'C++': ComputedProperty.Formula('C++_', 'pmz%5B', new NumberType()),
    Java: ComputedProperty.Formula('Java_', 'RTh%60', new NumberType()),
    Javascript: ComputedProperty.Formula(
        'Javascript_',
        'j%60Nu',
        new NumberType(),
    ),
    Python: ComputedProperty.Formula('Python_', 'pcyP', new NumberType()),
    Go: ComputedProperty.Formula('Go_', 'Fw%5DZ', new NumberType()),
    Kotlin: ComputedProperty.Formula('Kotlin_', 'FQvU', new NumberType()),
    Typescript: ComputedProperty.Formula(
        'Typescript_',
        'renR',
        new NumberType(),
    ),
    Rust: ComputedProperty.Formula('Rust_', 'Bnza', new NumberType()),
});
