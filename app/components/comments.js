import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.parseDate = this.parseDate.bind(this);
  }

  parseDate = (date) => {
    let formatted = date.slice(4, 10);
    return formatted;
  }

  render() {
    return (
      <View style={styles.descriptionContainer}>
        <View style={styles.description}>
          <Text style={styles.subTitles}>Comments</Text>
          {this.props.comments.map((comment, key) => {
            return (
              <View key={key} style={styles.comments}>
                <View style={styles.commentUser}>
                  <Image source={{ uri: comment.chef.avatar }} style={styles.commentAvatar} />
                  <Text style={styles.commentUserName}>{comment.chef.name}</Text>
                  {comment.rating === 5 && <Text>⭑⭑⭑⭑⭑</Text>}
                  {comment.rating === 4 && <Text>⭑⭑⭑⭑⭒</Text>}
                  {comment.rating === 3 && <Text>⭑⭑⭑⭒⭒</Text>}
                  {comment.rating === 2 && <Text>⭑⭑⭒⭒⭒</Text>}
                  {comment.rating === 1 && <Text>⭑⭒⭒⭒⭒</Text>}
                  {comment.rating === 0 && <Text>⭒⭒⭒⭒⭒</Text>}
                </View>
                <Text>{comment.body}</Text>
                <Text style={styles.commentDate}>{this.parseDate(comment.date)}</Text>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  commentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 5
  },
  descriptionContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  description: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5
  },
  comments: {
    paddingBottom: 5,
  },
  commentUser: {
    flexDirection: 'row',
    marginTop: 5,
  },
  commentUserName: {
    flex: 4,
    fontWeight: "500",
    marginTop: 5,
    marginLeft: 5
  },
  commentDate: {
    color: '#777',
    fontSize: 12,
    paddingTop: 5
  },
  subTitles: {
    fontWeight: "600",
    fontSize: 18,
  },
})

export default Comments;