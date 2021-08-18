import React, {useRef, useState, } from 'react'
import {View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView,StyleSheet, ScrollView, FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {COLORS,icons, SIZES, FONTS, images} from '../constants'
import Dates from '../components/Dates';
import Rating from '../components/Rating';
const {width, height} = Dimensions.get('screen')
const IMG_SIZE = 80;
const SPACING = 10;


const Ride = ({route}) => {
    const { carId, car } = route.params;
    const {name, trips, year} = car
    const [activeIndex, setActiveIndex] = useState(0)
    const topRef = useRef();
    const thumbRef = useRef();

    const imags = [
        {
            id:1,
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            id:2,
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            id:3,
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
    



      const scrollToActiveIndex = (index)=>{
        setActiveIndex(index)
        topRef?.current?.scrollToOffset({
            offset:index * SIZES.width-20,
            animated:true
        })

        if(index * (IMG_SIZE + SPACING) - IMG_SIZE /2 > width/2){
            thumbRef?.current?.scrollToOffset({
                offset:index *(IMG_SIZE + SPACING) - width/2 + IMG_SIZE/2,
                animated:true 
            })
        }else{
            thumbRef?.current?.scrollToOffset({
                offset:0,
                animated:true 
            })
        }
    }

    console.log(activeIndex)

    const navigation = useNavigation();
    const renderTopNav = ()=>{
        return(
            <View
            opacity={0.9}
            style={{
                paddingHorizontal:SIZES.padding2, flexDirection:'row', paddingVertical:SIZES.padding, backgroundColor:COLORS.white
            }}
        >
            <TouchableOpacity
                style={{
                    flexDirection:'row',
                    alignItems:"center"
                }}
                onPress={()=>navigation.goBack()}
            >
                <Image source={icons.back} 
                        resizeMode='contain'
                        style={{
                            height:25,
                            width:25,
                            tintColor:COLORS.black
                        }}
                    />
            </TouchableOpacity>
        </View>
        )
    }

    const renderHeader = ()=>{
        return(
            <View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10}}>
                <Text
                    style={{
                        ...FONTS.h0,
                        fontWeight:'bold'
                    }}
                >Ride It</Text>
                <TouchableOpacity>
                    <Image
                        source={icons.chat2}
                        style={{width:40, height:40, tintColor:COLORS.reddish}}
                    />
                </TouchableOpacity>
            </View>
            {/* Ride info */}
            <View style={{flexDirection:'row', paddingBottom:5, marginVertical:14}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{justifyContent:'center', elevation:2, borderRadius:70}}>
                        <Image 
                            source={images.driver1}
                            resizeMode='contain'
                            style={{
                                width:70,
                                height:70,
                                borderRadius:70,
                                                         
                               }}
                            
                        />
                    </View>
                    <View style={{
                        marginLeft:10
                    }}>
                        <Text style={{...FONTS.h3, fontWeight:'900'}}>Jeff ngugi</Text>
                        <View style={{flexDirection:'row', marginVertical:2}}>
                        <Text style={{...FONTS.h3, fontWeight:'bold', }}>{name}</Text>
                        <Text style={{...FONTS.h5, color:COLORS.gray}}>{year}</Text>
                        </View>
                        <Text style={{...FONTS.h4, color:COLORS.gray}}>{trips} Trips</Text>
                        
                    </View>
                </View>
                <View>
                    <Rating />
                </View>
            </View>
            </View>
            
        )
    }

    const renderImages = ()=>{
        
        return(
            <View style={{
                width:SIZES.width-20,
                height:SIZES.width + IMG_SIZE +SPACING
            }}>
                <FlatList 
                ref={topRef}
                horizontal
                pagingEnabled
                data={imags}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd ={ev => {
                    scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x/(SIZES.width-20)))
                }}
                keyExtractor={item => item.id.toString()}
                renderItem={({item})=>{
                    return <View style={{width:SIZES.width-20,height:SIZES.width}}> 
                                <Image source={{uri:item.original}}  resizeMode='contain' style={[StyleSheet.absoluteFill]}/>
                            </View>
                }}
            />


            <FlatList 
                ref={thumbRef}
                horizontal
                pagingEnabled
                data={imags}
                keyExtractor={item => item.id.toString()}
                style={{marginVertical:SIZES.base, }}
                contentContainerStyle={{paddingHorizontal:SPACING}}
                renderItem={({item, index})=>{
                    return <TouchableOpacity
                                onPress={()=>scrollToActiveIndex(index)}
                            >
                        <Image source={{uri:item.thumbnail}} style={{
                        width:IMG_SIZE,
                        height:IMG_SIZE,
                        borderRadius:12,
                        marginRight:SPACING,
                        borderWidth:2,
                        borderColor:activeIndex === index ? COLORS.reddish: 'transparent'
                    }}/>
                    </TouchableOpacity>
                         
                }}/>
                

                
                
            </View>
        )
    }

    const renderDates = ()=>{
        return(
            <Dates />
        )
    }

    const renderRideInfo = ()=>{
        return(
            <View style={{
                backgroundColor:COLORS.white, 
                paddingHorizontal:10,
                ...styles.shadow
            }}>
                <View style={{
                    marginVertical:12
                }}>
                    <Text style={{
                        ...FONTS.h3,
                        fontWeight:'bold',

                    }}>Ahmed Abdullah</Text>
                    <Text style={{
                        ...FONTS.body4
                    }}>Sheikh Mohammed bin Rashid Blvd - Dubai -</Text>
                    <Text style={{
                        ...FONTS.body4
                    }}>United Arab Emirates</Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:8,
                    marginBottom:14
                }}>
                    <Text style={{...FONTS.h4, fontWeight:'bold'}}>Trip Price</Text>
                    <Text style={{...FONTS.h4,}}>SAR 70.87/day</Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginVertical:8
                }}>
                    <Text style={{...FONTS.h5, fontWeight:'bold'}}>7 Days Trip</Text>
                    <Text style={{...FONTS.h5,}}>SAR 70.87/day</Text>
                </View>
                
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginVertical:8
                }}>
                    <Text style={{...FONTS.h5, fontWeight:'bold'}}>750 Total Miles</Text>
                    <Text style={{...FONTS.h5, color:COLORS.reddish}}>FREE</Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:8,
                    marginBottom:14
                }}>
                    <Text style={{...FONTS.h4, fontWeight:'bold'}}>TRIP TOTAL</Text>
                    <Text style={{...FONTS.h4,}}>SAR 70.87/day</Text>
                </View>
            </View>
        )
    }

    const renderInfo = ()=>{
        return(
            <View style={{
                backgroundColor:COLORS.white,
                paddingHorizontal:10,
                marginVertical:20,
                paddingVertical:15
            }}>
                 <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginVertical:10
                }}>
                    <Text style={{...FONTS.h4, fontWeight:'bold'}}>Your Info</Text>
                    <Text style={{...FONTS.h4, color:COLORS.reddish}}>ADD</Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginVertical:10
                }}>
                    <Text style={{...FONTS.h4, fontWeight:'bold'}}>Payment Info</Text>
                    <Text style={{...FONTS.h4, color:COLORS.reddish}}>ADD</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.background}}>
            
            {renderTopNav()}
            <ScrollView>
            <View style={{backgroundColor:COLORS.white, paddingHorizontal:10}}>
            {renderHeader()}
            {renderImages()}
            </View>
            {renderDates()}
            {renderRideInfo()}
            {renderInfo()}
            <View style={{
                paddingHorizontal:10,
                alignItems:'center',
                paddingVertical:10
            }}>
                <Text>You won't be charged until Ahmed Confirms this trip</Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor:COLORS.reddish,
                alignItems:'center',
                paddingVertical:2,
                borderTopLeftRadius:18,
                borderTopRightRadius:18,
                marginTop:5
            }}>
                <Text style={{
                        color:COLORS.white, 
                        marginVertical:10,
                        fontWeight:'700',
                        ...FONTS.h2
                    }}>RIDE NOW</Text>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
       
            
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.bgcolor
    },
    typeshadow:{
        shadowColor:COLORS.reddish,
        shadowOffset:{
            width:0,
            height:3
        },
        shadowOpacity:9,
        shadowRadius:7,
        elevation:1
    },
    shadow:{
        shadowColor:COLORS.black,
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0,
        shadowRadius:0,
        elevation:5
    }
    
})

export default Ride
