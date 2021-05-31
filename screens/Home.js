import React, {useState, useRef, useEffect} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, Modal, ScrollView, TouchableWithoutFeedback, FlatList} from 'react-native'
import CarHeading from '../components/CarHeading'
import Popular from '../components/Popular'
import Rating from '../components/Rating'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {COLORS, icons, images, SIZES, FONTS} from '../constants'

const Home = ({navigation}) => {

    const carouselRef = useRef(null);
    const [active, setActive] = useState(0)

    const [locations, setLocations] = useState([{"id":1, "name":'kikuyu, Kiambu'}, {"id":2, "name":'Nairobi, Kenya'},{"id":3, "name":'Ruiru, Kenya'}, {"id":4, "name":'Thika, Kiambu'}])
    const [cars, setCars] = useState([
        {"id":1, "name":" Volkswagen Golf", "category":"hatchback" },
        {"id":2, "name":" Audi A3", "category":"hatchback" },
        {"id":3, "name":" Mazda 3", "category":"hatchback" },
        {"id":4, "name":"Subaru Impreza", "category":"sedan" },
        {"id":5, "name":" Toyota Corolla", "category":"sedan" },
        {"id":6, "name":" BMW X4", "category":"suv" },
        {"id":7, "name":"Chevrolet Blazer" , "category":"suv" },
        {"id":8, "name":"Audi Q3", "category":"Crossover" },
        {"id":8, "name":"Audi Q3", "category":"Crossover" },
    ])

    const [popular, setPopular] = useState([
        {"id":1, "name":" Volkswagen Golf", "category":"hatchback", "year":2012, "cost":2000,"trips":23 },
        {"id":2, "name":" Audi A3", "category":"hatchback", "year":2013,"cost":2500 ,"trips":44},
        {"id":3, "name":" Mazda 3", "category":"hatchback" ,"year":2014,"cost":3000,"trips":56},
        {"id":4, "name":"Subaru Impreza", "category":"sedan", "year":2011,"cost": 200,"trips":63},
    ])

    const [selectedLocation, setSelectedLocation] = useState({"id":1, "name":'kikuyu'})
    const [modalVisible, setModalVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null)
    const categories = [
        {id:1, name:"HATCHBACK",image: require("../assets/icons/hatchack.png") },
        {id:2, name:"SEDAN",image: require("../assets/icons/sedan.png") },
        {id:3, name:"SUV",image: require("../assets/icons/suv-car.png") },
        {id:4, name:"CROSSOVER",image: require("../assets/icons/crossover.png") },

    ]

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
                        resizeMode='cover'
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
                style={{justifyContent:'center', alignItems:'center',marginVertical:SIZES.padding}}
            >
                <View
                    style={{flexDirection:'row'}}
                >
                <TouchableOpacity
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
                    onPress={()=>console.log('Set start date')}
                >
                    <Text style={{...FONTS.h0, marginVertical:5}}>10</Text>
                    <Text style={{color:COLORS.gray, ...FONTS.body3}}>Saturday , May 25</Text>
                    <Text style={{...FONTS.body3}}>TIME : 10:00</Text>
                </TouchableOpacity>
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
                <TouchableOpacity
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
                    onPress={()=>console.log('Set end date')}
                >
                    <Text style={{...FONTS.h0}}>11</Text>
                    <Text style={{color:COLORS.gray, ...FONTS.body3}}>Saturday , May 26</Text>
                    <Text style={{...FONTS.body3}}>TIME : 10:00</Text>
                </TouchableOpacity>
                
                </View>
               
            </View>
        )
    }

    const renderCarType = ()=>{
        const renderItem = ({item})=>{
            return(
                <TouchableOpacity style={{
                    width:SIZES.width/5.5,
                    marginHorizontal:SIZES.padding,
                     
                }}
                onPress={()=>setActiveCategory(item.name)}>
                <View
                    style={{
                        backgroundColor:activeCategory === item.name? COLORS.reddish:COLORS.white,
                        padding:SIZES.padding,
                        borderRadius:SIZES.radius *2,
                        marginVertical:SIZES.padding,
                        height:SIZES.width/5.5,
                        
                    }}
                >
                    <Image
                        resizeMode='contain'
                        source={item.image}
                        style={{
                            width:null,
                            tintColor:activeCategory === item.name? COLORS.white:COLORS.reddish,
                        }}
                    />
                </View>
                <View style={{alignItems:'center'}}>
                <Text 
                    style={{
                        marginVertical:SIZES.padding,
                        ...FONTS.body5,
                        color:activeCategory === item.name? COLORS.reddish:COLORS.black,
                        fontWeight:activeCategory === item.name?'bold':'300'
                    }}
                >{item.name}</Text>
                </View>
                
                </TouchableOpacity>
            )
        }
        return(
            <View style={{justifyContent:'center', alignItems:'center', marginVertical:SIZES.base-10}}>
                <FlatList
                    data={categories}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    style={{
                        padding:SIZES.padding*2,
                        marginBottom:SIZES.padding
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

    const renderCaurosel = () =>{
        

        const _renderItem = ()=>{
            return(
         <View style={{ marginHorizontal:SIZES.padding2}}>
                <View 
            style={{
                height:SIZES.width/1.2,
                borderRadius:SIZES.base,
                ...styles.shadow,
                backgroundColor:COLORS.white,
                marginTop:SIZES.base,
                padding:SIZES.padding
            }}
        >
            <View
                style={{
                    flex:1,
                    borderRadius:SIZES.base,
                    backgroundColor:COLORS.gray
                }}
            >
                <Image
                    resizeMode='stretch'
                    source={images.car1}
                    style={{
                        width:'100%',
                        height:'100%',
                        borderRadius:SIZES.base
                    }}
                    />
                <View
                    style={{
                        width:60,
                        height:40,
                        top:0,
                        right:0,
                        position:'absolute',
                        backgroundColor:COLORS.white,
                        borderBottomLeftRadius:SIZES.padding+5,
                        paddingVertical:5,
                        paddingHorizontal:4
                    }}
                >
                    <Rating />
                </View>
                
            </View>
            <CarHeading />
        </View>
        </View>
            )
        }
        return(
           
            <View>
                 <Carousel
                    ref={carouselRef}
                    data={cars}
                    renderItem={_renderItem}
                    sliderWidth={SIZES.width}
                     itemWidth={SIZES.width }
                     layout={'default'}
                    loop={true}
                    onSnapToItem={(index)=>setActive(index)}
                /> 
                <View style={{
                    backgroundColor:COLORS.white,
                    position:'absolute',
                    bottom:50,
                    left:SIZES.width/2.8,
                    borderRadius:4,
                    padding:6
                    
                    
                }}>
                    <Pagination
                        
                        dotsLength={5}
                        activeDotIndex={active}
                        containerStyle={{ backgroundColor:COLORS.white, paddingVertical:2, paddingHorizontal:0}}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 0,
                            backgroundColor: COLORS.reddish,
                        }}
                        inactiveDotStyle={{
                            // Define styles for inactive dots here
                            backgroundColor:COLORS.gray,
                            margin:0
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                     />
                </View>
                
            
            {/*  */}

        </View>
            
        )
    }

    const renderPopularCars = ()=>{
        return(
            <View style={{marginVertical:SIZES.padding +5, marginHorizontal:SIZES.padding2}}>
            <View>
                <Text style={{...FONTS.h2, fontWeight:'bold'}}>Popular Cars</Text>
                <View style={{flexDirection:'row'}}>
                  <Text style={{...FONTS.h4, color:COLORS.gray}}>Popular Car:</Text>
                  <Text style={{...FONTS.h4, color:COLORS.gray}}> {selectedLocation?.name}</Text>
                </View>
               
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
            {
                popular.map((car)=> <Popular navigation={navigation} key={`${car.id}`} car={car}/>)
            }
           
           
            </ScrollView>
           
           </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
            {renderHeader()}
            {renderDate()}
            {renderCarType()}
            {renderCaurosel()}
            {renderPopularCars()}
            <View style={{marginBottom:50}}></View>
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
