// src/mocks/browser.js
import { setupWorker } from 'msw/browser'; // Import from 'msw/browser'
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);