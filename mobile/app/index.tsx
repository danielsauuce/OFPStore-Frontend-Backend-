import { ScrollView, Text, View } from 'react-native';
import '../global.css';

export default function Index() {
  return (
    <View className="min-h-screen bg-[#FDFBF7]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-5 pb-3 items-center">
          <Text className="text-3xl">Olayinka</Text>
        </View>
      </ScrollView>
    </View>
  );
}
