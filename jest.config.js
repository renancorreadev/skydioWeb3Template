module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "src", "@contracts/*", "src/contracts/*"],
};
