import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { ArrowRight, Container, ShoppingBag, Star } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import "../../global.css"

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-light-background" style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-5 pb-2 items-center">
          <Text className="text-4xl font-bold tracking-tight text-light-primary">Olayinka</Text>
          <Text className="text-lg uppercase tracking-widest mt-1 text-light-textSecondary">
            FURNITURE PALACE
          </Text>
        </View>

        <View className=" px-5 py-4 mt-5">
          <View className=" rounded-3xl overflow-hidden h-80 flex-row bg-light-primary">
            <View className="flex-1 p-7 justify-center">
              <Text className="text-4xl font-bold text-white leading-tight mb-2">
                Discover{'\n'}Timeless{'\n'}Elegance
              </Text>
              <Text className="text-white/90 text-sm mb-6">
                Curated furniture for your dream home
              </Text>

              <View
                className={`flex-row items-center self-start px-5 py-3 rounded-2xl bg-light-surface gap-2`}
              >
                <Text className={`text-light-primary font-semibold`}>Shop Now</Text>
                <ArrowRight size={18} className="text-light-primary" />
              </View>
            </View>
            <Image
              source={{
                uri: 'https://i.pinimg.com/1200x/78/18/45/781845e16c300760d3ad9c17bc5994a6.jpg',
              }}
              className="w-36 h-full"
            />
          </View>
        </View>

        <View className="border border-red-500 px-5 py-6 mt-5"></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#20232a',
  }
})