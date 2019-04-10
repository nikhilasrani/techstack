import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props;
    if (library.item.id === selectedLibraryId) {
      return <Text>{library.item.description}</Text>;
    }
  }
  render() {
    const { listStyle } = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={listStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
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

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};
export default connect(
  mapStateToProps,
  actions
)(ListItem);
