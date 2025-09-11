import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Property = () => {
    const { id } = useLocalSearchParams();
    
    return (
        <View>
            <Text>Property</Text>
        </View>
    );
};

export default Property;