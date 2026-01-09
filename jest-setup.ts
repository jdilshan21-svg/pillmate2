import '@testing-library/jest-native/extend-expect';

// Mock environment config first to prevent Zod validation errors
const mockEnvConfig = {
  EXPO_PUBLIC_FIREBASE_API_KEY: 'test-api-key',
  EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN: 'test-project.firebaseapp.com',
  EXPO_PUBLIC_FIREBASE_PROJECT_ID: 'test-project',
  EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET: 'test-project.appspot.com',
  EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: '123456789012',
  EXPO_PUBLIC_FIREBASE_APP_ID: '1:123456789012:web:abcdef123456789012',
  EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID: 'G-ABCDEFGHIJ',
  EXPO_PUBLIC_FIREBASE_DATABASE_URL:
    'https://test-project-default-rtdb.region.firebasedatabase.app',
};

// Mock the environment config module
jest.mock('@/config/env', () => ({
  env: mockEnvConfig,
}));

// Mock expo-constants
jest.mock('expo-constants', () => ({
  expoConfig: {
    extra: mockEnvConfig,
  },
}));

// Set up process.env with the mock values
Object.assign(process.env, mockEnvConfig);

// Mock Firebase Analytics to prevent initialization errors
jest.mock('firebase/app', () => {
  const mockApp = {};
  return {
    initializeApp: jest.fn(() => mockApp),
    getApps: jest.fn(() => []),
    getApp: jest.fn(() => mockApp),
  };
});

// Mock Firebase services that might cause initialization issues
jest.mock('firebase/messaging', () => ({
  getMessaging: jest.fn(() => ({})),
}));

jest.mock('firebase/remote-config', () => ({
  getRemoteConfig: jest.fn(() => ({
    defaultConfig: {},
  })),
  fetchAndActivate: jest.fn(),
  getValue: jest.fn(),
  getAll: jest.fn(),
}));

jest.mock('firebase/database', () => ({
  getDatabase: jest.fn(() => ({})),
  ref: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(() => ({})),
  doc: jest.fn(),
  collection: jest.fn(),
}));

// Silence console warnings during tests
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};
