module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Required for expo-router
      "expo-router/babel",

      // Optional: Add this if you use Reanimated
      // 'react-native-reanimated/plugin',
    ],
  };
};
