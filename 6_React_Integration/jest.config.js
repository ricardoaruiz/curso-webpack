module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    moduleNameMapper: {
        '\\.(scss|sass)$': 'identity-obj-proxy'
    },
    testEnvironment: 'jest-environment-jsdom-global'
}