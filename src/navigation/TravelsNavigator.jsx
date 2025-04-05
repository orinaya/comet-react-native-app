import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TravelsScreen from "../screens/TravelsScreen";


const Stack = createNativeStackNavigator()

function TravelsNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Travels" component={TravelsScreen} />
        </Stack.Navigator>
    );
}

export default TravelsNavigator;