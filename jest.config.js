module.exports = {
  setupFiles: ['./src/test/setup.js'],
  transform: { '^.+\\.js$': 'babel-jest' },
  collectCoverageFrom: ['components/**/*.{js,jsx}', 'src/**/*.{js,jsx}', 'src/**/*.{js,jsx}', 'store/**/*.{js,jsx}', '!components/attendants/AttendantDashboard.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
