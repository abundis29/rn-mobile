import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              MyOrdersScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              SelectParcelScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
