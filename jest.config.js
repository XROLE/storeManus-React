module.exports = {
  setupFiles: ['./src/test/setup.js'],
  transform: { '^.+\\.js$': 'babel-jest' },
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
