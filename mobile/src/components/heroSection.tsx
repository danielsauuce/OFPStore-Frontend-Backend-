import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import { HeroSectionProps } from '@/src/types/HeroSection';

const HeroSection: React.FC<HeroSectionProps> = ({
  title = 'Discover\nTimeless\nElegance',
  subtitle = 'Curated furniture for your dream home',
  imageUrl = 'https://i.pinimg.com/1200x/78/18/45/781845e16c300760d3ad9c17bc5994a6.jpg',
  buttonText = 'Shop Now',
  onPress,
}) => {
  return (
    <View className="px-5 py-4 mt-5">
      <View className="rounded-3xl overflow-hidden h-80 flex-row bg-light-primary">
        {/* Text Section */}
        <View className="flex-1 p-7 justify-center">
          <Text className="text-4xl font-bold text-white leading-tight mb-2">{title}</Text>
          <Text className="text-white/90 text-sm mb-6">{subtitle}</Text>

          <TouchableOpacity
            onPress={onPress}
            className="flex-row items-center self-start px-5 py-3 rounded-2xl bg-light-surface gap-2"
          >
            <Text className="text-light-primary font-semibold">{buttonText}</Text>
            <ArrowRight size={18} className="text-light-primary" />
          </TouchableOpacity>
        </View>

        {/* Image Section */}
        <Image source={{ uri: imageUrl }} className="w-36 h-full" resizeMode="cover" />
      </View>
    </View>
  );
};

export default HeroSection;
