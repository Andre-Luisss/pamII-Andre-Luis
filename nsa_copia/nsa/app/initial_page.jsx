import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Pressable, Image, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";

export default function InitialPage() {
  const router = useRouter(); // Para navegação
  const [menuVisible, setMenuVisible] = useState(false); 
  const scale = useRef(new Animated.Value(1)).current; 

  // Função para animar o botão ao ser pressionado
  const onPressIn = () => {
    Animated.timing(scale, {
      toValue: 0.95,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };

  // Função para animar o botão ao ser solto
  const onPressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.menuButton}
        onPress={() => setMenuVisible(!menuVisible)} 
      >
        <Text style={styles.menuIcon}>...</Text>
      </Pressable>

      {/* Menu lateral */}
      {menuVisible && (
        <View style={styles.menu}>
          <Pressable onPress={() => console.log("Sobre a instituição")}>
            <Text style={styles.menuItem}>Sobre a instituição</Text>
          </Pressable>
          <Pressable onPress={() => router.push("/")}> 
            <Text style={styles.menuItem}>Logout</Text>
          </Pressable>
        </View>
      )}

      {/* Área do aluno */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/images/user.png")} 
          style={styles.profileImage}
        />
        <Pressable onPress={() => console.log("Mudar foto")}>
          <Text style={styles.changePhotoText}>Mudar foto</Text>
        </Pressable>
      </View>

      {/* Botão para informações do aluno */}
      <Pressable
        style={styles.button}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => router.push("/infos")} // Navega para a tela de informações
      >
        <Animated.View style={[styles.buttonContent, { transform: [{ scale }] }]}>
          <Image
            source={require("../assets/images/info.png")} // Ícone de informações
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Informações do Aluno</Text>
        </Animated.View>
      </Pressable>

      {/* Botão para acessar aulas e faltas */}
      <Pressable
        style={styles.button}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => console.log("Acessar aulas e faltas")}
      >
        <Animated.View style={[styles.buttonContent, { transform: [{ scale }] }]}>
          <Image
            source={require("../assets/images/papel.png")} // Ícone de boletim
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Aulas e Faltas</Text>
        </Animated.View>
      </Pressable>

      {/* Botão para acessar o horário das aulas */}
      <Pressable
        style={styles.button}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => console.log("Acessar horário das aulas")}
      >
        <Animated.View style={[styles.buttonContent, { transform: [{ scale }] }]}>
          <Image
            source={require("../assets/images/agenda.png")} // Ícone de agenda
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Horário das Aulas</Text>
        </Animated.View>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B0C4DE", // Cor de fundo igual à tela de login
  },
  menuButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  menuIcon: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E3A5F", // Cor do ícone do menu
  },
  menu: {
    position: "absolute",
    top: 80,
    left: 20,
    backgroundColor: "#fff", // Cor de fundo do menu
    borderRadius: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra no Android
  },
  menuItem: {
    fontSize: 16,
    color: "#1E3A5F", // Cor do texto do menu
    marginBottom: 10,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Foto redonda
    marginBottom: 10,
  },
  changePhotoText: {
    fontSize: 16,
    color: "#1E3A5F", // Cor do texto
    textDecorationLine: "underline",
  },
  button: {
    width: "50%", // Largura reduzida dos botões
    backgroundColor: "#1E3A5F", // Cor de fundo do botão
    borderRadius: 25,
    padding: 10, // Padding reduzido
    marginBottom: 15, // Espaçamento entre botões reduzido
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    width: 20, // Ícone menor
    height: 20, // Ícone menor
    marginRight: 8, // Espaçamento reduzido
  },
  buttonText: {
    color: "#fff", // Cor do texto do botão
    fontSize: 14, // Texto menor
    fontWeight: "bold",
  },
});