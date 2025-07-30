import { SafeAreaProvider } from "react-native-safe-area-context";

interface SafeAreaCustomProviderProps {
  children: React.ReactNode;
}

const SafeAreaCustomProvider: React.FC<SafeAreaCustomProviderProps> = ({
  children,
}) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export default SafeAreaCustomProvider;