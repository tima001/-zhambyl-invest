import _ from 'lodash'
import React from 'react'
import { useIntl } from 'react-intl'
import {
    TableHead,
} from '@mui/material'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { fakeDealsAndHistoryDate} from "../../../../utils/constants";

const AccountTable = () => {
    const { formatMessage } = useIntl()
    const columns = [
        { id: 'deal-type', value: 'Deal type' },
        {
            id: 'product',
            value: formatMessage({ id: 'Product' }),
        },
        {
            id: 'quantity',
            value: formatMessage({ id: 'Quantity' }),
        },
        {
            id: 'price',
            value: formatMessage({ id: 'Price' }),
        },
        {
            id: 'complete-date',
            value: formatMessage({ id: 'Complete date' }),
        },
        {
            id: 'total-amount',
            value: formatMessage({ id: 'Total amount' }),
        },
    ]
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0
            ? Math.max(0, (1 + page) * rowsPerPage - fakeDealsAndHistoryDate.length)
            : 0


    return (
        <Box>

            <TableContainer
                component={Paper}
                sx={{ border: 1, borderColor: 'grey.100', borderRadius: 2 }}
                elevation={0}
            >
                <Table
                    sx={{ minWidth: 500 }}
                    aria-label="custom pagination table"
                >
                    <TableHead
                        sx={{
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <TableRow>
                            {columns?.map((col) => {
                                    return (
                                        <TableCell
                                            component="th"
                                            scope="col"
                                            key={_.uniqueId('th')}
                                            sx={{
                                                color: '#525252',
                                                textTransform: 'uppercase',
                                                fontWeight: 700,
                                                backgroundColor: "#E4E9F0"
                                            }}
                                        >
                                            {col.value}
                                        </TableCell>
                                    )
                            })}
                        </TableRow>
                    </TableHead>
                    {fakeDealsAndHistoryDate.length ? (
                        <TableBody sx={{ whiteSpace: 'nowrap' }}>
                            {fakeDealsAndHistoryDate.map((row, index) => (
                                <TableRow
                                    key={_.uniqueId('row')}
                                >
                                    <TableCell
                                        id="deal-type"
                                        sx={{ width: '20px' }}
                                    >
                                        {row.dealType}
                                    </TableCell>

                                    <TableCell id="product">
                                        {row.product}
                                    </TableCell>

                                    <TableCell id="quantity">{row.quantity}</TableCell>

                                    <TableCell id="price">
                                        {row.price}
                                    </TableCell>

                                    <TableCell id="complete-date">
                                        {row.completeDate}
                                    </TableCell>

                                    <TableCell id="total-amount">
                                        {row.totalAmount}
                                    </TableCell>

                                </TableRow>
                            ))}

                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={10} />
                                </TableRow>
                            )}
                        </TableBody>
                    ) : (
                        <TableBody>
                            <TableRow>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                    colSpan={10}
                                >
                                    {formatMessage({ id: 'noData' })}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
        </Box>
    )
}

export default AccountTable