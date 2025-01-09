module.exports = {
    preset: 'ts-jest',                      
    testEnvironment: 'jsdom',                 
    roots: ['<rootDir>/tests'],                
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'], 
    testMatch: [
      '**/__tests__/**/*.+(ts|tsx|js)?(x)',    
      '**/?(*.)+(spec|test).+(ts|tsx|js)?(x)', 
    ],
  };
  