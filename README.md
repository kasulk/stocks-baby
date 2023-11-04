Meet

# Ursula 💅

Ursula renders and processes fundamental data of ~3000 stocks of the largest publicly held companies in the US [Russell 3000 Index](https://en.wikipedia.org/wiki/Russell_3000_Index).

## Tech Stack

[![Tech Stack](https://skillicons.dev/icons?i=html,css,js,ts,react,nextjs,mongodb,nodejs,tailwind)](https://skillicons.dev)

## Features

- Renders and processes fundamental data of ~3000 stocks in the US [Russell 3000 Index](https://en.wikipedia.org/wiki/Russell_3000_Index) from MongoDB
- Search
- Login with [GitHub](https://github.com/kasulk) via [NextAuth.js](https://next-auth.js.org)
- Responsive
- Darkmode
- Infinite scroll
- Every stock is linked to [finviz.com](https://finviz.com)

## APIs

- The data is fetched from 2 APIs ([AlphaVantage](https://www.alphavantage.co) and [TwelveData](https://twelvedata.com))
- Due to the API restrictions, I created a script that runs on node
- The script fetches the data on interval and stores it in the DB
- It works seperately from Ursula, so it is found in another repo

## Why

- Ursula helps the long-term investor to find potentially undervalued companies
- that companies can then be further investigated

## What's next

- Fixing the sort functionality
- Fixing the favorite functionality
- Refactor to increase comprehensibility (start with pages/index.tsx)
- [and so much more...](https://github.com/users/kasulk/projects/1)

## How to run Ursula on your machine

### 1. Install `Node.js` and `npm`

#### On Windows:

Download `Node.js` [here](https://nodejs.org/en), and install it

#### On Linux:

```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run Ursula

```bash
npm run dev
```

### 4. Open Ursula in your favorite browser

[http://localhost:3000](http://localhost:3000)

### 5. Smile

🥴

&nbsp;

---

Made with 🍕 in Berlin.
