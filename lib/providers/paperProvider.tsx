import { PaperProvider } from "react-native-paper";

interface PaperCustomProviderProps {
  children: React.ReactNode;
}

const PaperCustomProvider: React.FC<PaperCustomProviderProps> = ({
  children,
}) => {
  return <PaperProvider>{children}</PaperProvider>;
};

export default PaperCustomProvider;
