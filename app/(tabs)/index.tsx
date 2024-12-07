import { Button, ButtonText } from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Button size="md" variant="solid" action="negative">
        <ButtonText>Hello World!</ButtonText>
      </Button>
    </SafeAreaView>
  );
}
