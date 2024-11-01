import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Link, router } from "expo-router";

import Button from "../../components/button";

const handlePress = (): void => {
  // ログイン
  router.push('/memo/List')
}


const SignUp = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="Email adress" />
        <TextInput style={styles.input} value="Password" />
        <Button label="Submit" onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Alredy registered</Text>

          <Link href="/auth/login" asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log In.</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },

  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "#ffffff",
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },

  footer: {
    flexDirection: "row",
  },

  footerText: {
    fontSize: 14,
    lineHeight: 24,
    margin: 8,
    color: "#000000",
  },

  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    margin: 8,
    color: "blue",
  },
});