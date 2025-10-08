import { View, Text, StyleSheet } from "react-native";
import React from "react";
import moment from "moment";
import { User, Clock } from "lucide-react-native";


const PostCard = ({ posts }) => {
  return (
    <View>
        {posts?.length === 0 ? <Text style={[styles.heading,{color:'red'}]}>No Content Please add posts to display</Text>:
      <Text style={styles.heading}>Total Posts: {posts.length}</Text>}

      {posts?.map((post, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.title}>{post?.title}</Text>
          <Text style={styles.description}>{post?.description}</Text>

          <View style={styles.footerCard}>    
            <View style={styles.footerItem}>
              <User size={15} color="orange" />
              <Text style={styles.author}>
                {post?.postedBy?.name || "Unknown"}
              </Text>
            </View>

            <View style={styles.footerItem}>
              <Clock size={15} color="orange" />
              <Text style={styles.date}>
                {moment(post?.createdAt).format("DD:MM:YYYY")}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  heading: {
    color: "green",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
    borderWidth: 0.4,
    borderColor: "#eee",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: "#555",
    marginBottom: 10,
    lineHeight: 20,
  },
  footerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: "#ddd",
    paddingTop: 8,
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",  
  },
  author: {
    marginLeft: 5,
    fontSize: 13,
    fontWeight: "500",
    color: "#2b7a78",
  },
  date: {
    marginLeft: 5,
    fontSize: 12,
    color: "#888",
  },
});
