import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Infos() {
  const router = useRouter(); // Para navegação

  // Dados aleatórios do aluno
  const email = "aluno123@instituto.com"; // Email institucional fictício
  const numero = "(11) 98765-4321"; // Número de telefone fictício

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações do Aluno</Text>

      {/* Email institucional */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email Institucional:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>

      {/* Número de telefone */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Número de Telefone:</Text>
        <Text style={styles.value}>{numero}</Text>
      </View>

      {/* Botão para voltar à página inicial */}
      <Pressable
        style={styles.button}
        onPress={() => router.push("/initial_page")} // Navega para a tela inicial
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B0C4DE", // Cor de fundo igual à tela de login
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#1E3A5F", // Cor do título
  },
  infoContainer: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center", // Centraliza o conteúdo horizontalmente
  },
  label: {
    fontSize: 16,
    color: "#1E3A5F", // Cor do texto do label
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", // Cor do valor
  },
  button: {
    width: "50%",
    backgroundColor: "#1E3A5F", // Cor de fundo do botão
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff", // Cor do texto do botão
    fontSize: 16,
    fontWeight: "bold",
  },
});