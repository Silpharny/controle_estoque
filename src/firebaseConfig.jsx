import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmYPNpYndMrhyORACzFRlHPtDckRQB3I4",
  authDomain: "bugetbolt.firebaseapp.com",
  projectId: "bugetbolt",
  storageBucket: "bugetbolt.appspot.com",
  messagingSenderId: "919542514617",
  appId: "1:919542514617:web:e03f43cd2e302ece6f2c68",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
