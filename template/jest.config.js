export default {
  preset: "ts-jest/presets/default-esm",
  moduleNameMapper: {
    '^(\\.{1}/.*)\\.[jt]s$': '$1',
    "#ansi-styles": "ansi-styles",
    "#supports-color": "supports-color"
  },
};