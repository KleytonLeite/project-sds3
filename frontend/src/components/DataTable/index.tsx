const DataTable = () => {

    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Anakin</td>
                        <td>40</td>
                        <td>50</td>
                        <td>19017.00</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Kal-Ei</td>
                        <td>24</td>
                        <td>10</td>
                        <td>9017.00</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Logan</td>
                        <td>44</td>
                        <td>45</td>
                        <td>14017.00</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Padme</td>
                        <td>24</td>
                        <td>15</td>
                        <td>18017.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;