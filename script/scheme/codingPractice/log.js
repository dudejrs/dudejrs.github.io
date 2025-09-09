const {PageScheme} = require('../../notion/scheme');
const {NestedProperty} = require('../../notion/property');

module.exports = new PageScheme('codingPracticeLog', {
    date: NestedProperty.Date('Date', 'bvyh', 'date'),
    Count: NestedProperty.Number('Count', 'FBry'),
    'Count (C++)': NestedProperty.Number('Count (C++)', '%5Drk%5B'),
    'Count (Java)': NestedProperty.Number('Count (Java)', 'rQgM'),
    'Count (Javascript)': NestedProperty.Number('Count (Javascript)', 'fnbe'),
    'Count (Python)': NestedProperty.Number('Count (Python)', '%3A%3D%3At'),
    'Count (Go)': NestedProperty.Number('Count (Go)', 'tssq'),
    'Count (Kotlin)': NestedProperty.Number('Count (Kotlin)', 'U%3CWO'),
    'Count (Typescript)': NestedProperty.Number(
        'Count (Typescript)',
        '%3B%3Efj',
    ),
    'Count (Rust)': NestedProperty.Number('Count (Rust)', 'MOOE'),
    Repetition: NestedProperty.Number('Repetition', 'g~%3BV'),
    'Repetition (C++)': NestedProperty.Number('Repetition (C++)', 'l%3Cv%60'),
    'Repetition (Java)': NestedProperty.Number('Repetition (Java)', 'ZYBm'),
    'Repetition (Javascript)': NestedProperty.Number(
        'Repetition (Javascript)',
        'fE%40WR',
    ),
    'Repetition (Python)': NestedProperty.Number(
        'Repetition (Python)',
        '%7DO%40S',
    ),
    'Repetition (Go)': NestedProperty.Number('Repetition (Go)', 'Gy%3Ca'),
    'Repetition (Kotlin)': NestedProperty.Number(
        'Repetition (Kotlin)',
        'U%7C%60W',
    ),
    'Repetition (Typescript)': NestedProperty.Number(
        'Repetition (Typescript)',
        'iN%3Cw',
    ),
    'Repetition (Rust)': NestedProperty.Number('Repetition (Rust)', 'DCma'),
});
