import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

type SignGoogleProps = {
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  text?: string;
};

// Inicializa o WebBrowser para lidar com a sessão de autenticação
WebBrowser.maybeCompleteAuthSession();

export function SignGoogle({
  onPress,
  loading = false,
  disabled = false,
  text = "Continuar com Google",
}: SignGoogleProps) {
  // Configura a solicitação de autenticação do Google
  const [request, response, promptAsync] = Google.useAuthRequest({
    // Os ids dos clientes estão no google cloud console
    webClientId:
      "494615575471-ug8kmt37rdetkj5av66o5tfnaol6le4s.apps.googleusercontent.com",
    androidClientId:
      "494615575471-toimg76j3qejsnu46e93age3u5i04t1b.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      // Obtém o token de autenticação do Google
      const { authentication } = response;
      console.log("Token Google:", authentication?.accessToken);
      // Handle successful authentication here

      if (authentication?.accessToken) {
        (async () => {
          try {
            // Busca informações do usuário usando o token de acesso
            const response = await fetch(
              "https://www.googleapis.com/userinfo/v2/me",
              {
                headers: {
                  Authorization: `Bearer ${authentication.accessToken}`,
                },
              }
            );
            if (!response.ok) throw new Error("Failed to fetch user info");
            // Extrai os dados do usuário da resposta
            const userInfo = await response.json();
            const { email, name, id } = userInfo;
            console.log("User Info:", userInfo);
          } catch (error) {
            console.error("Error fetching user info:", error);
          }
        })();
      }
    }
  }, [response]);

  return (
    <Pressable
      onPress={() => promptAsync()}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        (disabled || loading) && styles.disabled,
      ]}
    >
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator color="#4285F4" />
        ) : (
          <FontAwesome
            name="google"
            size={18}
            color="#EA4335"
            style={styles.icon}
          />
        )}
        <Text style={styles.text} numberOfLines={1}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.6,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
  icon: {
    width: 18,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "#3C4043",
  },
});

export default SignGoogle;

function useAuthRequest(arg0: any, arg1: any): [any, any, any] {
  throw new Error("Function not implemented.");
}
