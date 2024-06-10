import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import axios from "axios";
import _ from "lodash";
import { Transaction } from "./types/Transaction";
import { Category } from "./types/Category";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import List from "./components/List/List";
import { Loader } from "./components/Loader";
import BankData from "./components/BankData/BankData";

const debounce = _.debounce((fetchTransactions, filters) => {
  fetchTransactions(filters);
}, 500);

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<Category | "">("");
  const [amountFilter, setAmountFilter] = useState<number[]>([0, 100]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransactions = async (filters = {}) => {
    setIsLoading(true);

    const params = new URLSearchParams();

    if (filterCategory) params.append("category", filterCategory);
    if (query) params.append("type", query);

    if (amountFilter[0] !== 0 || amountFilter[1] !== 100) {
      params.append("amountMin", amountFilter[0].toString());
      params.append("amountMax", amountFilter[1].toString());
    }

    const queryString = params.toString();
    const url = `http://localhost:3000/transactions${queryString ? `?${queryString}` : ""}`;

    try {
      const response = await axios.get(url);
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      throw new Error("Error fetching transactions");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const filters: any = {};
    if (filterCategory) filters.category = filterCategory;
    if (query) filters.type = query;
    if (amountFilter[0] !== 0 || amountFilter[1] !== 100)
      filters.amountMin = amountFilter[0];
    filters.amountMax = amountFilter[1];

    debounce(fetchTransactions, filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterCategory, amountFilter, query]);

  return (
    <Container>
      <Header
        query={query}
        setQuery={setQuery}
        setFilterCategory={setFilterCategory}
        setAmountFilter={setAmountFilter}
      />

      <Box
        sx={{
          minHeight: "calc(100vh - 64px - 125px)",
        }}
      >
        <Filter
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          amountFilter={amountFilter}
          setAmountFilter={setAmountFilter}
        />

        {isLoading
          ? <Loader />
          : <List transactions={transactions}
        />}
      </Box>

      <BankData />
    </Container>
  );
};

export default App;
