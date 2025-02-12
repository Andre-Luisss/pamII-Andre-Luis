import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, StyleSheet, Animated, Pressable } from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";

export default function ForgetPassword() {
  const router = useRouter(); // Para navegação, se necessário
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
         <b>Recuperação de Senha</b> 
        </Text>
        <StatusBar style="auto" />

        {/* Campo de email */}
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
          placeholder="Código do Aluno(a)"
          keyboardType="email-address" // Teclado otimizado para emails
          autoCapitalize="none" // Evita a capitalização automática
        />

        {/* Botão "Recuperar senha" */}
        <Pressable
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
          <Animated.View
            style={[
              styles.loginButton,
              { transform: [{ scale }] },
            ]}
          >
            <Text style={styles.loginButtonText}>Recuperar senha</Text>
          </Animated.View>
        </Pressable>
      </View>

      <View style={{ marginTop: 20, alignItems: 'center' }}>
        {/* Link para voltar à tela de login */}
        <Pressable onPress={() => router.back()}>
          <Text style={{ color: '#1E3A5F' }}>Voltar ao login</Text>
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