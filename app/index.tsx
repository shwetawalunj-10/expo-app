import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";
const Index = () => {
  return (

    <Redirect href={'/profile'} />
  );
};

export default Index;
