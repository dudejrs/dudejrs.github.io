import {useState, useEffect} from 'react';

import {Tooltip, Tag, Dropdown, DropdownTagList} from '../../components';
import {
    DonutChart,
    LinePlot,
    PercentageBox,
    SpiderChart,
    AxisBottom,
    AxisLeft,
    Grid,
} from '../../components/chart';

export default function () {
    const testTime = [new Date(2010, 0, 1), new Date(2010, 2, 14)];

    return (
        <div>
            <div>
                <h3>ui</h3>
                <Tag name={'tag'} />
                <Tooltip />
                <Dropdown width={'100px'} content={'Hello World!'}>
                    Drop down
                </Dropdown>
                <DropdownTagList
                    width={'100px'}
                    names={['tag1', 'tag2', 'tag3']}
                    tags={['tag1']}
                />
            </div>
            <div>
                <h3>chart</h3>
                <LinePlot
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    width={150}
                    height={150}
                    margin={{top: 20, right: 20, bottom: 20, left: 20}}
                />
                <DonutChart
                    width={150}
                    height={150}
                    data={[1, 2, 3, 4, 5]}
                    radius={50}
                />
                <PercentageBox
                    width={210}
                    height={30}
                    padding={7.5}
                    data={[10, 20, 30, 40, 50]}
                />
                <SpiderChart
                    width={200}
                    height={200}
                    data={[
                        {a: 1, b: 2, c: 3, d: 4},
                        {a: 2, b: 3, c: 4, d: 1},
                    ]}
                />
                <AxisLeft
                    data={[10, 20, 30, 40, 50]}
                    width={50}
                    height={200}
                    margin={{top: 20, right: 0, bottom: 20, left: 0}}
                />
                <AxisBottom
                    data={testTime}
                    type={'time'}
                    tickformat={'week'}
                    width={1000}
                    height={50}
                    margin={{top: 0, right: 20, bottom: 0, left: 20}}
                />
                <Grid
                    data={[1, 2, 3, 4, 5]}
                    axisData={[1, 2, 3, 4, 5]}
                    color={'#999'}
                    nticks={3}
                    width={200}
                    height={200}
                    margin={{top: 20, right: 20, bottom: 20, left: 20}}
                />
            </div>
        </div>
    );
}
