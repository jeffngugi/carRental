import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, Modal, ScrollView, TouchableWithoutFeedback, FlatList} from 'react-native'
import {COLORS, icons, images, SIZES, FONTS} from '../constants'

const Home = () => {

    const [locations, setLocations] = useState([{"id":1, "name":'kikuyu, Kiambu'}, {"id":2, "name":'Nairobi, Kenya'},{"id":3, "name":'Ruiru, Kenya'}, {"id":4, "name":'Thika, Kiambu'}])
    const [selectedLocation, setSelectedLocation] = useState({"id":1, "name":'kikuyu'})
    const [modalVisible, setModalVisible] = useState(false);
// console.log(selectedLocation);
    // console.log(locations)
    const renderHeader = ()=>{
        return(
            <View style={{
                flexDirection:'row',
                height:60,
                marginVertical:SIZES.padding
            }}>
                <TouchableOpacity
                    style={{
                        width:50,
                        justifyContent:'center',
                        paddingLeft:SIZES.padding,
                        borderRadius:50

                    }}
                    onPress={() => console.log('go to profiles')}
                >
                    <Image
                        source={images.user1}
                        resizeMode='contain'
                        style={{
                            width:50,
                            height:50,
                            borderRadius:50
                        }}

                    />
                </TouchableOpacity>
                <View
                    style={{
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <View style={{width:'80%', height:'100%', alignItems:'center', justifyContent:"center"}}>
                        <Text
                            style={{
                                ...FONTS.h2
                            }}
                        >Location</Text>
                        <TouchableOpacity
                            style={{
                                marginVertical:2,
                                flexDirection:'row'
                            }}
                            onPress={()=> setModalVisible(true)}
                        >
                            <View style={{justifyContent:'center'}}>
                            <Text style={{
                                ...FONTS.body3,color:COLORS.gray 
                            }}>{selectedLocation.name}</Text>
                            </View>
                            <View style={{justifyContent:'center'}}>
                            <Image  
                                source={icons.down}
                                style={{
                                    width:10,
                                    height:10,
                                    tintColor:COLORS.gray,
                                    marginHorizontal:2,

                                }}
                            />
                            </View>
                            
                            
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width:50,
                        justifyContent:'center',
                        paddingRight:SIZES.padding,

                    }}
                    onPress={()=>console.log('go to maps')}
                >
                    <Image
                        source={icons.maps}
                        resizeMode='contain'
                        style={{
                            width:40,
                            height:40,
                        }}

                    />
                </TouchableOpacity>
                    
            </View>
        )
    }

    const renderDate = () =>{
        return(
            <View
                style={{justifyContent:'center', alignItems:'center',marginVertical:SIZES.padding*2}}
            >
                <View
                    style={{flexDirection:'row'}}
                >
                <View
                    style={{
                        backgroundColor:COLORS.white,
                        paddingVertical:20,
                        paddingHorizontal:18,
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius:12,
                        marginHorizontal:10,
                        width:"42%"
                    }}
                >
                    <Text style={{...FONTS.h0, marginVertical:5}}>10</Text>
                    <Text style={{color:COLORS.gray, ...FONTS.body3}}>Saturday , May 25</Text>
                    <Text style={{...FONTS.body3}}>TIME : 10:00</Text>
                </View>
                    <View
                        style={{
                             position:'absolute',
                             backgroundColor:COLORS.black,
                             padding:8,
                             borderRadius:50,
                             alignItems:'center',
                             justifyContent:'center',
                             top:'35%',
                             bottom:'35%',
                             left:'41%',
                             zIndex:100,
                             transform: [{rotate: '180deg'}]
                             
                        }}
                    >
                        <Image
                            resizeMode='contain'
                            source={icons.back}
                            style={{width:25, height:25, tintColor:COLORS.white}}
                        />
                    </View>
                <View
                    style={{
                        backgroundColor:COLORS.white,
                        paddingVertical:20,
                        paddingHorizontal:18,
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius:12,
                        marginHorizontal:10,
                        width:"42%"
                    }}
                >
                    <Text style={{...FONTS.h0}}>11</Text>
                    <Text style={{color:COLORS.gray, ...FONTS.body3}}>Saturday , May 26</Text>
                    <Text style={{...FONTS.body3}}>TIME : 10:00</Text>
                </View>
                
                </View>
               
            </View>
        )
    }

    const renderCarType = ()=>{
        const renderItem = ()=>{
            return(
                <View
                    style={{
                        backgroundColor:COLORS.white,
                        
                    }}
                >
                    <Text>Jeff ngugu</Text>
                </View>
            )
        }
        return(
            <View style={{justifyContent:'center', alignItems:'center', marginVertical:SIZES.padding}}>
                <FlatList
                    data={locations}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    style={{
                        padding:SIZES.padding*2,
                        marginBottom:SIZES.padding*2
                    }}
                />
            </View>
        )
    }

    const renderLocations = () =>{
        const renderItem =({item})=>{
            return(
                <TouchableOpacity style={{flexDirection:'row',padding:SIZES.padding}}
                    onPress={()=>{
                        setSelectedLocation(item)
                        setModalVisible(false)
                    }}
                >
                    <Text style={{...FONTS.body3}}>{item.name}</Text>
                </TouchableOpacity>
            )
        }
        return(
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={()=>setModalVisible(false)}
                >
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <View style={{minHeight:200, width:SIZES.width*0.7, backgroundColor:COLORS.lightRed, borderRadius:SIZES.radius}}>
                            <FlatList
                                data={locations}
                                keyExtractor={item => `${item.id}`}
                                renderItem={renderItem}
                                showsHorizontalScrollIndicator={false}
                                style={{
                                    padding:SIZES.padding*2,
                                    marginBottom:SIZES.padding*2
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            {renderHeader()}
            {renderDate()}
            {renderCarType()}
            </ScrollView>
            {renderLocations()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.bgcolor
    },
    shadow:{
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:3
        },
        shadowOpacity:0.1,
        shadowRadius:3,
        elevation:1
    }
})
export default Home
