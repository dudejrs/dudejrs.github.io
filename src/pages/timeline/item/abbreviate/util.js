export const month = date => {
    if (!date || !date['start'] || !date['end']) {
        return null;
    }

    const startDate = date['start'].split('-');
    const endDate = date['end'].split('-');

    if (startDate[1] === endDate[1]) {
        return `${startDate[1]}월`;
    }

    return `${startDate[1]}월 ~ ${endDate[1]}월`;
};
