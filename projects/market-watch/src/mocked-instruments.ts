// Temporary
import { IInstrument } from 'trading';

export const defaultInstruments = [
  {
    contractSize: 20,
    description: 'E-Mini Nasdaq-100',
    exchange: 'CME',
    productCode: 'NQ',
    id: 'NQM2.CME',
    precision: 2,
    symbol: 'NQM2',
    tickSize: 0.25,
  },
  {
    contractSize: 50,
    description: 'E-Mini S&P 500',
    exchange: 'CME',
    productCode: 'ES',
    id: 'ESM2.CME',
    precision: 2,
    symbol: 'ESM2',
    tickSize: 0.25,
  },
  {
    contractSize: 5,
    description: 'Mini-sized Dow Futures ($5)',
    exchange: 'CBOT',
    productCode: 'YM',
    id: 'YMM2.CBOT',
    precision: 0,
    symbol: 'YMM2',
    tickSize: 1,
  },
  {
    contractSize: 50,
    description: 'E-mini Russell 2000 Index Futures',
    exchange: 'CME',
    id: 'RTYM2.CME',
    productCode: 'RTY',
    precision: 1,
    symbol: 'RTYM2',
    tickSize: 0.1,
  },
  {
    contractSize: 125000,
    description: 'Euro Fx',
    exchange: 'CME',
    id: '6EM2.CME',
    productCode: '6E',
    precision: 5,
    symbol: '6EM2',
    tickSize: 0.00005,
  },
  {
    contractSize: 1000,
    description: '30 Year US Treasury Bond Futures',
    exchange: 'CBOT',
    id: 'ZBM2.CBOT',
    symbol: 'ZBM2',
    productCode: 'ZB',
    fraction: 32,
    tickSize: 0.03125,
    precision: 5
  },
  {
    contractSize: 1000,
    description: '10 Year US Treasury Note Futures',
    exchange: 'CBOT',
    id: 'ZNM2.CBOT',
    productCode: 'ZN',
    symbol: 'ZNM2',
    fraction: 32,
    tickSize: 0.015625,
    precision: 6,
  }
] as IInstrument[];