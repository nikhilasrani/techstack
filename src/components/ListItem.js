import React, { Component } from "react";
import { Text, View } from "react-native";
import { CardSection } from "./common";

class ListItem extends Component {
  render() {
    const { container, listStyle, emptyMessageStyle } = styles;
    return (
      <CardSection>
        <View style={styles.container}>
          <Text style={styles.listStyle}>{this.props.library.title}</Text>
        </View>
      </CardSection>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  listStyle: {
    justifyContent: "center"
  },
  emptyMessageStyle: {
    textAlign: "center"
  }
};
export default ListItem;
