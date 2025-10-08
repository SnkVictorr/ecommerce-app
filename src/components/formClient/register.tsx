import React from "react";
import { Text, View } from "react-native";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";
import { ClienteService } from "@//models/services/ClienteService";
import { router } from "expo-router";
import Cliente from "@//models/types/Cliente";
const FormLogin: React.FC = () => {
  // UseState para colocar os valores dos inputs
  // Interação do usuário com o estado da página (Interatividade)
  // UseState muda conforme o usuário faz ações
  const [nome, setNome] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [senha, setSenha] = React.useState<string>("");
  const _clienteService = new ClienteService();
  const [result, setResult] = React.useState<string | null>(null);

  const onPressRegister = async () => {
    try {
      const novoCliente: Cliente = {
        nome,
        email,
        senha,
      };
      await _clienteService.create(novoCliente);
      console.log("Cliente cadastrado com sucesso!");
      router.replace("/login/index");
    } catch (error) {
      console.error("Não foi possível cadastrar.", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          alignSelf: "center",
        }}
      >
        Login
      </Text>

      <Title TitleName="Email" />
      <Input
        InputName="Digite seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Title TitleName="Digite sua senha" />
      <Input
        InputName="Digite sua Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

      <Button
        ButtonName="Login"
        ButtonColor="orange"
        onPress={onPressRegister}
      />

      {result !== null && <Text style={{ fontSize: 18 }}>{result}</Text>}
    </View>
  );
};

export default FormLogin;
