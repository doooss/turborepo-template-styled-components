const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    preset: 'ts-jest',
    testPathIgnorePatterns: ['<rootDir>/cypress/', '<rootDir>/node_modules/'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};

module.exports = customJestConfig;
