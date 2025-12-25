// Test setup file

// Set test environment variables before anything loads
process.env.NODE_ENV = 'test';
process.env.DATABASE_URL = 'postgresql://postgres:Harharmahadev@db.mkmrncxvhonmghtjlmbo.supabase.co:5432/postgres';

// Global test timeout
jest.setTimeout(10000);

// Suppress console logs during tests
beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => { });
    jest.spyOn(console, 'error').mockImplementation(() => { });
});

afterAll(() => {
    jest.restoreAllMocks();
});
