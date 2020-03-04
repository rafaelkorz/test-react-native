import Reactootron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactootron.configure()
    .useReactNative()
    .connect();

  tron.clear();
}
