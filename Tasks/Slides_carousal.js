import React, { useState, useRef } from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

// ... (rest of the code remains the same)


const data = [
  {
    name: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    url: "https://picsum.photos/id/11/200/300",
  },
  {
    name: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    url: "https://picsum.photos/id/10/200/300",
  },
  {
    name: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    url: "https://picsum.photos/id/12/200/300",
  },
  {
    name: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    url: "https://picsum.photos/id/11/200/300",
  },
  {
    name: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    url: "https://picsum.photos/id/10/200/300",
  },
  {
    name: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    url: "https://picsum.photos/id/12/200/300",
  },
];

const renderItem = ({item}) => {
  return (
    <View
      style={{borderWidth: 1,padding: 20,borderRadius: 20,alignItems: 'center',backgroundColor: 'yellow'}}>
      <Image source={{uri: item.url}} style={{width: 300, height: 300,resizeMode:'cover'}} />
      <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold',color:'black'}}>{item.name}</Text>
      <Text style={{marginVertical:5,fontSize:15,fontWeight:'500',color:'black'}}>{item.body}</Text>
    </View>
  );
};

const App = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={{marginVertical: 10}}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 20,
          height: 20,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#F4BB41',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'blue',
          // Define styles for inactive dots here
        }}
        // inactiveDotOpacity={0.4}
        //  inactiveDotScale={0.6}
      />
    </View>
  );
};

export default App;