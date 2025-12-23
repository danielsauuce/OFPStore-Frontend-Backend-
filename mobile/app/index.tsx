import { Redirect } from 'expo-router';
import '../global.css';

export default function Index() {
  return <Redirect href="/(tabs)" />;
}

// import "../global.css"
// import { Text, View } from "react-native";
 
// export default function App() {
//   return (
//     <View className="flex-1 items-center justify-center bg-red-500">
//       <Text className="text-xl font-bold text-blue-500">
//         Welcome to Nativewind!
//       </Text>
//     </View>
//   );
// }