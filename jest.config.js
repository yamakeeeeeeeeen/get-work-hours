module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/renderer"],
  setupFilesAfterEnv: ["<rootDir>/renderer/test/setupTests.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/renderer/.next/",
    "<rootDir>/node_modules/",
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/renderer/$1",
  },
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    "ts-jest": {
      tsConfig: "<rootDir>/renderer/test/tsconfig.jest.json",
    },
  },
};
