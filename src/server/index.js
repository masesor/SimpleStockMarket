const express = require('express');
const bodyParser = require('body-parser');
const uuidv1 = require('uuid/v1');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let trades = [];
let stocks = [];

app.use(express.static('dist'));

const createTrade = (request) => (
  {
    buySellInd: request.buySellInd,
    id: uuidv1(), // Time based ID
    ticker: request.ticker,
    tradePrice: parseFloat(request.tradePrice),
    quantity: parseFloat(request.quantity),
    tradeDate: new Date(),
    tradeValue: parseFloat(request.tradePrice) * parseFloat(request.quantity),
  }
);

/**
 * Creates a stock
 * 
 * Some values are using mock (random) data.
 * @param {Stock request} request 
 */
const createStock = (request) => ({
  fixedDividend: null, // null for Common stock
  lastDividend: 0,
  parValue: randomNumber(1, 10, 1000),
  stockType: "Common",
  ticker: request.ticker,
  stockType: 'Common',
  lastDividend: Math.floor(Math.random() * 100),
  fixedDividend: null, // null for Common stock
  parValue: Math.floor(Math.random() * 100),
  price: parseFloat(request.tradePrice) + Math.random()
});


app.get('/api/getTrades', (req, res) => {
  try {
    const tradesJson = JSON.stringify(trades);
    res.send(tradesJson);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify([]));
  }
});
  
app.get('/api/getStocks', (req, res) => {
  try {
    const stocksJson = JSON.stringify(stocks);
    res.send(stocksJson);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify([]));
  }
});
  
app.post('/api/submitTrade', (req, res) => {
  const tradeRequest = req.body;
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
      stocks[tradeRequest.ticker] = stock;
    } else {
      // Update existing with new dividend and price details
      const updatedStock = {
        ...stockDetail,
        lastDividend: stockDetail.lastDividend + randomNumber(1, 1, 5),
      };
      stocks[tradeRequest.ticker] = updatedStock;
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