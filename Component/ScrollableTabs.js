import React, { Component } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

export default class ScrollableTabs extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   image: PropTypes.string,
  //   title: PropTypes.string,
  //   price: PropTypes.string
  // };
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: Dimensions.get('window').height,
      screenWidth: Dimensions.get('window').width,
      tabsWidth: [],
      activeTab: 0
    };
  }
  scrollToTab = index => {
    console.log(index);
    scrollXPos = 0;
    this.setState({ activeTab: index });
    for (let i = 0; i < index; i++) {
      scrollXPos += this.state.tabsWidth[i];
    }
    console.log('scrollXPos', scrollXPos);
    this.scroller.scrollTo({ x: scrollXPos, y: 0 });
  };

  handletab1Widthayout = (evt, index) => {
    console.log(evt.nativeEvent.layout);
    console.log(index);
    const tabsWidth = [...this.state.tabsWidth];
    tabsWidth[index] = evt.nativeEvent.layout.width;
    this.setState({ tabsWidth }, () => {
      console.log('tab', this.state.tabsWidth);
    });
  };

  // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // };

  render() {
    return (
      <View>
        <ScrollView
          contentContainerStyle={[
            styles.tabContentStyle,
            this.props.tabContentStyle
          ]}
          ref={scroller => {
            this.scroller = scroller;
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          // onMomentumScrollEnd={() => this.scrollToTab(this.state.activeTab)}
          // onScrollEndDrag={() => this.scrollToTab(this.state.activeTab)}
        >
          {this.props.tabs.map((tab, index) => {
            return (
              <TouchableOpacity
                key={index}
                transparent
                style={styles.tabViewStyle}
                onPress={() => this.scrollToTab(index)}
              >
                <Text
                  style={
                    this.state.activeTab === index
                      ? [styles.activeTabStyle, this.props.activeTabStyle]
                      : [styles.tabStyle, this.props.tabStyle]
                  }
                  onLayout={e => this.handletab1Widthayout(e, index)}
                >
                  {tab.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {this.props.tabs[this.state.activeTab].renderScene}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  tabContentStyle: {
    marginTop: 20,
    alignItems: 'center'
  },
  tabViewStyle: {
    paddingHorizontal: 0,
    alignSelf: 'center'
  },
  tabStyle: {
    color: 'black',
    paddingHorizontal: 20
  },
  activeTabStyle: {
    color: '#E7E7F0',
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '500',
    paddingHorizontal: 20
  }
});
