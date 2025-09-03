export function toString(date) {
    if (!date['start'] || !date['end']) {
        return null;
    }

    const start = date['start'].slice(0, 10);
    const end = date['end'].slice(0, 10);

    return `${start} ~ ${end}`;
}
