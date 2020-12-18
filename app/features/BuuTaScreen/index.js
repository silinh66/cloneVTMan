import ViewPager from '@react-native-community/viewpager';
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default class BuuTaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCur: 1,
    };
    this.viewPager = React.createRef();
  }

  renderItem = (data) => {
    return (
        <TouchableOpacity style={this.state.pageCur === data.item.id ? styles.viewPageSelected : styles.viewPage}
          onPress={() => {
            this.onPress(data.item.id - 1)
          }}
        >
          <Text>{`Page ${data.item.id}`}</Text>
        </TouchableOpacity>
    )
  }

  onPress = (index) => {
    this.viewPager.current.setPage(index);
    this.setState({pageCur: parseInt(index) + 1});
  }

  render() {
    const data = [
      {
        id: 1,
        text: "Page 1"
      },
      {
        id: 2,
        text: "Page 2"
      },
      {
        id: 3,
        text: "Page 3"
      },
      {
        id: 4,
        text: "Page 4"
      },
      {
        id: 5,
        text: "Page 5"
      },
      {
        id: 6,
        text: "Page 6"
      },
      {
        id: 7,
        text: "Page 7"
      },
    ]
    return (
      <View style={{flex: 1}}>
        <FlatList showsHorizontalScrollIndicator={false} horizontal data={data} renderItem={(data, index) => this.renderItem(data)} keyExtractor={(item) => item.id.toString()}/>
        <ViewPager style={styles.viewPager} initialPage={0} ref={this.viewPager} scrollEnabled={false}>
          <View style={styles.container} key="1">
            <Text>Page 1</Text>
          </View>
          <View style={styles.container} key="2">
            <Text>Page 2</Text>
          </View>
          <View style={styles.container} key="3">
            <Text>Page 3</Text>
          </View>
          <View style={styles.container} key="4">
            <Text>Page 4</Text>
          </View>
          <View style={styles.container} key="5">
            <Text>Page 5</Text>
          </View>
          <View style={styles.container} key="6">
            <Text>Page 6</Text>
          </View>
          <View style={styles.container} key="7">
            <Text>Page 7</Text>
          </View>
        </ViewPager>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 250,
  },
  viewPager: {
    flex: 11
  },
  viewPage: {
    alignItems: 'center', 
    paddingHorizontal: 15, 
    justifyContent: 'center'
  },
  viewPageSelected: {
    alignItems: 'center', 
    paddingHorizontal: 15, 
    justifyContent: 'center',
    borderBottomColor: '#44AB4A',
    borderBottomWidth: 2,
  }
});