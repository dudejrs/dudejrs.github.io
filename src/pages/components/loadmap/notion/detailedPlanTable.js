import React from 'react';

import Table from '../../../../notion/table';

const columns = ['세부계획', '진행상태', 'Done', 'Date'];
const types = ['title', 'select', 'checkbox', 'date'];
const ratio = [3, 1, 1, 1];

export default function DetailedPlanTable({ detailedPlan = []}) {
    return (
        <div>
            {Object.keys(detailedPlan) && (
                <Table
                    columns={columns}
                    types={types}
                    data={detailedPlan}
                    ratio={ratio}
                />
            )}
        </div>
    );
}
