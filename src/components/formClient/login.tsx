import React from "react";
import { Text, View } from "react-native";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";
import { ClienteService } from "@//models/services/ClienteService";
import { router } from "expo-router";

const FormLogin: React.FC = () => {
  // UseState para colocar os valores dos inputs
  // Interação do usuário com o estado da página (Interatividade)
  // UseState muda conforme o usuário faz ações
  const [email, setEmail] = React.useState<string>("");
  const [senha, setSenha] = React.useState<string>("");
  const _clienteService = new ClienteService();
  const [result, setResult] = React.useState<string | null>(null);

  const onPressLogin = async () => {
    try {
      const _clientes = await _clienteService.getAll();
      console.log(_clientes);
      const _usuario = _clientes.find(
        (cliente) => cliente.email === email && cliente.senha === senha
      );
      if (_usuario) {
        setResult("Login realizado com sucesso!");
        router.replace("/(tabs)");
        // setResult(_usuario.loginUsuario());
      } else {
        setResult("Usuário ou senha inválidos");
      }
    } catch (error) {
      setResult("Erro ao realizar login");
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

      <Button ButtonName="Login" ButtonColor="orange" onPress={onPressLogin} />

      {result !== null && <Text style={{ fontSize: 18 }}>{result}</Text>}
    </View>
  );
};

export default FormLogin;
