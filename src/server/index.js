const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let trades = [];
let stocks = [];

app.use(express.static('dist'));

const createTrade = (request) => (
  {
    ticker: request.ticker,
    tradePrice: parseFloat(request.tradePrice),
    quantity: parseFloat(request.quantity),
    tradeTime: new Date(),
    value: parseFloat(request.tradePrice) * parseFloat(request.quantity),
  }
);

const createStock = (request) => ({
  ticker: request.ticker,
  type: 'Common',
  lastDividend: Math.random(),
  fixedDividend: null,
  parValue: Math.floor(Math.random() * 100),
  currentPrice: request.tradePrice + Math.random()
});


app.get('/api/getTrades', (req, res) => {
  if (trades.length === 0) {
    try {
      const tradesJson = JSON.parse(trades);
      trades = tradesJson.data;
      res.send(tradesJson);
    } catch (e) {
      console.log(e);
      res.send(JSON.stringify({ data: [] }));
    }
  }
});
  
app.get('/api/getStocks', (req, res) => {
  if (stocks.length === 0) {
    try {
      const stocksJson = JSON.parse(stocks);
      res.send(stocksJson);
    } catch (e) {
      res.send(JSON.stringify({ data: [] }));
    }
  }
});
  
app.post('/api/submitTrade', (req, res) => {
  const tradeRequest = req.body;
  console.log(tradeRequest);
  if (tradeRequest.tradePrice === null || tradeRequest.quantity === null) {
    res.status(400).json({ error: 'Invalid input provided to submit trade' });
  }
  
  try {
    const trade = createTrade(tradeRequest);
    trades.push(trade);

    const stockDetail = stocks.find((stock) => stock.ticker === trade.ticker);
    if (!stockDetail) {
      // Create stock if not present
      stock = createStock(tradeRequest);
      stocks.push(stock);
    }
  
    res.send(
      trade
    );
  
  } catch (e) {
    res.status(500).json({ error: 'Could not read data' });
    res.send(null);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));