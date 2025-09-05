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
import {fakeBalanceData, fakeDealsAndHistoryDate} from "../../../../utils/constants";

const BalaneHistoryTable = () => {
    const { formatMessage } = useIntl()
    const columns = [
        {
            id: 'transaction-type',
            value: formatMessage({ id: 'Transaction type' }),
        },
        {
            id: 'amount',
            value: formatMessage({ id: 'Amount' }),
        },
        {
            id: 'date',
            value: formatMessage({ id: 'Date' }),
        },
        {
            id: 'status',
            value: formatMessage({ id: 'Status' }),
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
                sx={{ border: 1, borderColor: '#D7D7D7', borderRadius: 2 }}
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
                                                backgroundColor: "#F2F2F2"
                                            }}
                                        >
                                            {col.value}
                                        </TableCell>
                                    )
                            })}
                        </TableRow>
                    </TableHead>
                    {fakeBalanceData.length ? (
                        <TableBody sx={{ whiteSpace: 'nowrap' }}>
                            {fakeBalanceData.map((row, index) => (
                                <TableRow
                                    key={_.uniqueId('row')}
                                >
                                    <TableCell id="transaction-type">
                                        {row.transactionType}
                                    </TableCell>

                                    <TableCell id="amount">
                                        {row.amount}
                                    </TableCell>

                                    <TableCell id="date">
                                        {row.date}
                                    </TableCell>

                                    <TableCell id="status">
                                        {row.status}
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

export default BalaneHistoryTable