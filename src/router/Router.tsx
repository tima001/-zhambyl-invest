import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import ProtectedRoute from "../components/ProtectedRoute";
import Account from "../pages/user/Account/Account";
import TradeHistory from "../pages/user/TradeHistory/TradeHistory";
import BalanceHistory from "../pages/user/BalanceHistory/BalanceHistory";
import Support from "../pages/user/Support/Support";
import Trading from "../pages/user/Trading/Trading";
import Portfolio from "../pages/user/Portfolio/Portfolio";
import InvestmentOpportunities from "../pages/InvestmentOpportunities/Home";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/investment-opportunities"
                    element={<InvestmentOpportunities />}
                />

                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/account"
                        element={<Account />}
                    />

                    <Route
                        path="/trade-history"
                        element={<TradeHistory />}
                    />


                    <Route
                        path="/balance-history"
                        element={<BalanceHistory />}
                    />

                    <Route
                        path="/support"
                        element={<Support />}
                    />

                    <Route
                        path="/trading"
                        element={<Trading />}
                    />
                    <Route
                        path="/portfolio"
                        element={<Portfolio />}
                    />
                </Route>

                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </>
    )
}

export default AppRouter
