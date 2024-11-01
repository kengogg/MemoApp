import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

import Icon from "./Icon";

const MemoListItem = () => {
  return (
    <View style={styles.memoListItem}>
      <Link href="/memo/detail" asChild>
        <TouchableOpacity>
          <Text style={styles.memoListTitle}>買い物リスト</Text>
          <Text tyle={styles.memoListDate}>2023年10月28日 10:00</Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity>
        <Icon name="delete" size={32} color="#B0B0B0" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },

  memoListTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
  },

  memoListDate: {
    fontSize: 10,
    lineHeight: 10,
    color: "grey5",
  },
});

export default MemoListItem;
