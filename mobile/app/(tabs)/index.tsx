import { ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import HeroSection from '../../src/components/heroSection';

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-light-background min-h-screen">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 pt-5 pb-2 items-center">
          <Text className="text-4xl font-bold tracking-tight text-light-primary">Olayinka</Text>
          <Text className="text-lg uppercase tracking-widest mt-1 text-light-textSecondary">
            FURNITURE PALACE
          </Text>
        </View>

        {/* Hero Section */}
        <HeroSection onPress={() => router.push('/shop')} buttonText="Shop Now" />

        {/* Featured Collection Placeholder */}
        <View className="border border-red-500 px-5 py-6 mt-5">
          <Text className="text-light-textSecondary">Featured Collection Coming Soon</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
