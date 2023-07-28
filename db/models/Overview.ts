import mongoose from "mongoose";
import { NumberOrNull } from "./_customSchemaTypes";
import Quote from "./Quote"; //note:
import Logourl from "./Logourl"; //note:

const { Schema } = mongoose;

// Mongoose-Modell für die zu speichernden Overview-Daten definieren
const overviewSchema = new Schema(
  {
    ticker: { type: String, required: true },
    // price: NumberOrNull, //! twelve data
    address: String,
    assetType: String,
    cik: String,
    country: String,
    currency: String,
    description: String,
    dividendDate: String,
    exchange: String,
    exDividendDate: String,
    fiscalYearEnd: String,
    industry: String,
    latestQuarter: String,
    name: String,
    sector: String,
    analystTargetPrice: NumberOrNull,
    beta: NumberOrNull,
    bookValue: NumberOrNull,
    dilutedEPSTTM: NumberOrNull,
    dividendPerShare: NumberOrNull,
    dividendYield: NumberOrNull,
    ebitda: NumberOrNull,
    eps: NumberOrNull,
    eps15x: NumberOrNull, // calulated
    evToEBITDA: NumberOrNull,
    evToRevenue: NumberOrNull,
    fiftyTwoWeekHigh: NumberOrNull, // e.g. "12.92",
    fiftyTwoWeekLow: NumberOrNull, // e.g. "22.84",
    forwardPE: NumberOrNull,
    grossProfitTTM: NumberOrNull,
    marketCapitalization: NumberOrNull,
    movingAverage50day: NumberOrNull, // e.g. "14.37",
    movingAverage200day: NumberOrNull, // e.g. "17.57",
    operatingMarginTTM: NumberOrNull,
    peRatio: NumberOrNull,
    pegRatio: NumberOrNull,
    priceToBookRatio: NumberOrNull,
    priceToSalesRatioTTM: NumberOrNull,
    profitMargin: NumberOrNull,
    quarterlyEarningsGrowthYOY: NumberOrNull,
    quarterlyRevenueGrowthYOY: NumberOrNull,
    returnOnAssetsTTM: NumberOrNull,
    returnOnEquityTTM: NumberOrNull,
    revenuePerShareTTM: NumberOrNull,
    revenueTTM: NumberOrNull,
    sharesOutstanding: NumberOrNull,
    trailingPE: NumberOrNull,
    // Bruchwert52Week: Number, // calculated
    // Favorites: [String], // Field "Favorites" is Array of Strings
    // logoURL: String, //! twelve data
  },
  // create timestamps for createdAt and updatedAt
  {
    timestamps: true,
    // If you want populate virtuals to show up when using functions like Express' res.json() function or console.log(),
    // set the virtuals: true option on your schema's toJSON and toObject() options
    // https://mongoosejs.com/docs/populate.html#populate-virtuals
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    //! StrictPopulateError workaround...
    // strictPopulate: false, //note:
  } // https://mongoosejs.com/docs/timestamps.html
);

// Create a virtual reference to the Quote-Model based on 'ticker'
overviewSchema.virtual("quotesData", {
  // 'quotesData' is a custom name for the virtual field; used to access the virtual field later with .populate('quotesData')
  ref: "Quote",
  localField: "ticker",
  foreignField: "ticker",
  justOne: true, // set to true if only one ticker per stock is expected, else false
});

// Create a virtual reference to the Logourl-Model based on 'ticker'
overviewSchema.virtual("logoData", {
  // 'logoData' is a custom name for the virtual field; used to access the virtual field later with .populate('logoData')
  ref: "Logourl",
  localField: "ticker",
  foreignField: "ticker",
  justOne: true, // set to true if only one ticker per stock is expected, else false
});

// check whether the model with this name has already been compiled and if yes, take the already compiled model
const Overview =
  mongoose.models.Overview || mongoose.model("Overview", overviewSchema);

export default Overview;
