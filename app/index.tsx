import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";
const Index = () => {
  return (

    <Redirect href={'/profile'} />
  );
};

export default Index;

// import { Link } from "expo-router";
// import { Text, View } from "react-native";
// const Index = () => {
//   return (
//     <View
//       style={{
//         backgroundColor: "blue",
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",

//       }}
//     >
//       <Text style={{ fontSize: 30, fontWeight: "600", color: "white" }}>
//         Welcome To shweta's screen

//       </Text>
//       <Link href={"/about"}>Go to about</Link>
//     </View>
//   );
// };

// export default Index;