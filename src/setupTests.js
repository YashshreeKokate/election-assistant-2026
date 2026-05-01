import '@testing-library/jest-dom';
import { setupGoogleMapsMock } from './mocks/googleMapsMock';

// Initialize Google Maps mock globally
setupGoogleMapsMock();

// Mock scrollTo as it's not implemented in JSDOM
window.scrollTo = jest.fn();

// Mock localStorage
const localStorageMock = (function() {
  let store = {};
  return {
    getItem: function(key) { return store[key] || null; },
    setItem: function(key, value) { store[key] = value.toString(); },
    clear: function() { store = {}; },
    removeItem: function(key) { delete store[key]; }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
