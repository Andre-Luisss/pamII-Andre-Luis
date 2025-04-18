import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, StyleSheet, Animated, Pressable } from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router"; // Importe o useRouter

export default function Index() {
  const router = useRouter(); // Inicialize o router
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.timing(scale, {
      toValue: 0.95,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderWidth: 2,
          borderColor: '#000',
          padding: 20,
          borderRadius: 5,
          alignItems: 'center',
          backgroundColor: '#B0C4DE'
        }}
      >
        <Text
          style={{
            marginBottom: 23,
          }}
        >
          Login no Sistema
        </Text>
        <StatusBar style="auto" />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 5,
            padding: 15,
            marginBottom: 15,
            paddingTop: 10,
            paddingBottom: 10,
            width: 200,
          }}
          placeholder="Codigo de Aluno(a)"
        />

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 5,
            padding: 15,
            marginBottom: 15,
            paddingTop: 10,
            paddingBottom: 10,
            width: 200,
          }}
          placeholder="Password"
          secureTextEntry={true}
        />

        {/* Botão de login com navegação para a página inicial */}
        <Pressable
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onPress={() => router.push("/initial_page")} // Navega para a página inicial
        >
          <Animated.View
            style={[
              styles.loginButton,
              { transform: [{ scale }] },
            ]}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </Animated.View>
        </Pressable>
      </View>

      <View style={{ marginTop: 20, alignItems: 'center' }}>
        {/* Link para a tela de recuperação de senha */}
        <Pressable onPress={() => router.push("/forget_password")}>
          <Text style={{ color: '#1E3A5F', marginBottom: 10 }}>Esqueci a senha</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#1E3A5F',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    width: 200,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});