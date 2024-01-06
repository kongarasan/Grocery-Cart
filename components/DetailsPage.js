import { View, Image, Text } from "react-native"
const DetailsPage = ({route})=>{
    return(
        <View>
    <Text>{route.params.category}</Text>
        </View>
    )
}

export default DetailsPage;