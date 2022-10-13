import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  Image,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
// import {images} from '../images';
import {RootState, useAppDispatch} from '../redux/rootReducer';
import {getPosts} from '../redux/slices/getPostsSlice';

export type ImageLoadingLocalDemoScreenProps = {};

const screenWidth = Dimensions.get('screen').width;

export const ImageLoadingLocalDemoScreen = (): JSX.Element => {
  const navigation: any = useNavigation();

  const {photos, loading} = useSelector((state: RootState) => state.posts);
  const dispatch = useAppDispatch();
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [showOrHideList, setShowOrHideList] = useState(false);

  useEffect(() => {
    if (photos.length) {
      console.log('photos.length=', photos.length);
      const endingTime = new Date().getTime();
      setEndTime(endingTime);
    }
  }, [photos]);

  const calculateApiResponseTime = () => {
    const time = new Date().getTime();
    setStartTime(time);
    dispatch(getPosts());
    setShowOrHideList(!showOrHideList);
  };

  const tinyLogo = {
    width: screenWidth / 2,
    height: screenWidth / 2,
    resizeMode: 'cover',
  } as ImageStyle;

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('imageView', {id: item});
        }}>
        <View style={styles.imageContainer}>
          <Image style={tinyLogo} source={{uri: item}} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderData = (data: any) => {
    return (
      <View style={styles.container}>
        <Text>{`The time taken: ${
          endTime - startTime > 0 ? endTime - startTime : 0
        } ms`}</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={calculateApiResponseTime}
            title="ImageLoad(Network)"
            color="#000"
          />
        </View>

        {showOrHideList ? (
          <View style={styles.imageListContainer}>
            <FlatList
              contentContainerStyle={styles.imageList}
              data={data}
              numColumns={2}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => `item_${index}`}
            />
          </View>
        ) : null}
      </View>
    );
  };
  if (loading) {
    return <Text>Loading......</Text>;
  } else {
    return renderData(photos);
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 8,
  },
  buttonContainer: {backgroundColor: '#2596be', borderRadius: 4},
  imageListContainer: {flexDirection: 'row'},
  imageList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  imageContainer: {flexDirection: 'row', margin: 4},
});
