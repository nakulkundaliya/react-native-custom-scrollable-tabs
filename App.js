import React, { Component } from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';
import ScrollableTabs from './Component/ScrollableTabs';

class Recent extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Recent</Text>
      </ScrollView>
    );
  }
}
class SchoolStore extends Component {
  render() {
    return (
      <ScrollView>
        <Text>School Store</Text>
      </ScrollView>
    );
  }
}
class Deals extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Deals</Text>
      </ScrollView>
    );
  }
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: Dimensions.get('window').height,
      screenWidth: Dimensions.get('window').width
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <ScrollableTabs
          tabContentStyle={{
            marginLeft: 10
          }}
          tabStyle={{
            color: '#E7E7F0',
            fontSize: 28,
            lineHeight: 34,
            fontWeight: '500'
          }}
          activeTabStyle={{
            color: '#212128',
            fontSize: 28,
            lineHeight: 34,
            fontWeight: '500'
          }}
          tabs={[
            {
              title: 'Recent',
              renderScene: <Recent />
            },
            {
              title: 'School Store',
              renderScene: <SchoolStore />
            },
            {
              title: 'Deals',
              renderScene: <Deals />
            }
          ]}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
