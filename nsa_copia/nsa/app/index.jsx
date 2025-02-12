import { StatusBar } from "expo-status-bar";
import { Text,Pressable,TextInput, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login no Sistema</Text>
      <StatusBar style="auto"/>
      <TextInput />
      <TextInput />
      <Pressable>
        <Text>Logar</Text>

      </Pressable>
      <View>
        <Pressable>
          <Text>Esqueci a senha</Text>
        </Pressable>
        <Pressable>
          <Text>Novo usuário</Text>
        </Pressable>
      </View>
    </View>
  );
}
