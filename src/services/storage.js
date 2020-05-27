import AsyncStorage from '@react-native-community/async-storage';

export const setStorage = (name, value) => {
  return AsyncStorage.setItem(name, value);
};

export const getStorage = (name) => {
  return AsyncStorage.getItem(name);
};

export const removeStorage = (name) => {
  return AsyncStorage.removeItem(name);
};

export const clearStorage = () => {
  return AsyncStorage.clear();
};
