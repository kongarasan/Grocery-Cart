import { View, Image, Text, ImageBackground ,TouchableOpacity} from "react-native"
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";
const DetailsPage = ({route})=>{
    const [count,setCount] =useState(0)
    return(
        <View>
        <ImageBackground source={route.params.image} style={{height:430,width:"100%"}}>

        </ImageBackground>
    <View style={{height:400,width:"100%",backgroundColor:"white",borderTopLeftRadius:50,borderTopRightRadius:50,marginTop:-44}}>
    <View style={{height:18,width:70,backgroundColor:"#DBEFE3",marginTop:29,marginHorizontal:28,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:10,color:"#4CAD73"}}>{route.params.category}</Text>
    </View>

<Text style={{fontSize:24,marginHorizontal:28,marginTop:15}}>{route.params.name}</Text>
<Text style={{fontSize:18,marginHorizontal:28,marginTop:15,color:"#4CAD73"}}>Rs: {route.params.price}/kg</Text>
<Text style={{fontSize:14,marginTop:25,marginHorizontal:44,color:"#4CAD73"}}>Description</Text>
<View style={{height:4,width:80,backgroundColor:"#4CAD73",marginHorizontal:44,marginTop:10,borderTopLeftRadius:6,borderTopRightRadius:6}}></View>
<View style={{width:"100%",height:2,backgroundColor:"#BDBDBD",marginTop:0}}></View>
<Text style={{fontSize:13,marginHorizontal:28,marginTop:22,textAlign:"justify",color:"#828282"}}>{route.params.details}</Text>
    </View>
    <View style={{backgroundColor:"white",height:120,borderTopLeftRadius:50,borderTopRightRadius:50,marginTop:-44,flexDirection:'row'}}>
    <View style={{ flexDirection: 'row', marginTop: 10,marginTop:22 ,marginHorizontal:30}}>
                    <TouchableOpacity
                    onPress={()=>{
                        if(count >0)
                        {
                            setCount(count-1)
                        }
                        
                        }}>
                        <Entypo name="circle-with-minus" size={30} color="#4CAD73" style={{marginTop:12}} />
                    </TouchableOpacity>
                    <View style={{ height: 50, width: 50, backgroundColor: '#E5E5E5', borderRadius: 6, marginHorizontal: 6, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#4CAD73', textAlign: 'center' }}>{count}</Text>
                    </View>
                    <TouchableOpacity
                    onPress={()=>{setCount(count+1)}}>
                        <Entypo name="circle-with-plus" size={30} color="#4CAD73" style={{marginTop:12}} />
                    </TouchableOpacity>


                </View>

            <TouchableOpacity style={{height:50,width:180,backgroundColor:"#4CAD73",marginTop:22,borderRadius:10,justifyContent:'center',alignContent:'center',alignItems:'center'}}>

             <Text style={{fontSize:16,color:"white"}}> Add to Cart</Text>
            </TouchableOpacity>
                </View>
        </View>

    )
}

export default DetailsPage;