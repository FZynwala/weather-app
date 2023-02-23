import { DataTable } from 'react-native-paper';
import { Main, Wind } from '../types';

type DataTableComponentProps = {
    mainData?: Main;
    wind?: Wind;
};

export const DataTableComponent: React.FC<DataTableComponentProps> = ({ mainData, wind }) => {
    return (
        <DataTable>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontSize: 20 }}>Feels</DataTable.Cell>
                <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                    {mainData?.feels_like} &#176;C
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontSize: 20 }}>Temp max</DataTable.Cell>
                <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                    {mainData?.temp_max} &#176;C
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontSize: 20 }}>Temp min</DataTable.Cell>
                <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                    {mainData?.temp_min} &#176;C
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontSize: 20 }}>Humidity</DataTable.Cell>
                <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                    {mainData?.humidity}%
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontSize: 20 }}>Pressure</DataTable.Cell>
                <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                    {mainData?.pressure} hPa
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontSize: 20 }}>Wind speed</DataTable.Cell>
                <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                    {wind?.speed} m/s
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontSize: 20 }}>Wind deg</DataTable.Cell>
                <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                    {wind?.deg}
                </DataTable.Cell>
            </DataTable.Row>
        </DataTable>
    );
};
