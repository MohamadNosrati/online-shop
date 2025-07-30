import PaperCustomProvider from "./paperProvider";
import SafeAreaCustomProvider from "./safeAreaProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <SafeAreaCustomProvider>
    <PaperCustomProvider>
      {children}
    </PaperCustomProvider>
    </SafeAreaCustomProvider>
  );
};

export default Providers;
