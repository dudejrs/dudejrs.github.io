export function filterData(data, fields) {
    if (!fields) {
        return data;
    }

    const output = {};

    output['id'] = data['id'];

    fields.forEach(field => {
        if (data[field]) output[field] = data[field];
    });

    return output;
}
