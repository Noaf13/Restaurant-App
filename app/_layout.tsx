// app/_layout.tsx
import "./globals.css";
import { Stack, SplashScreen } from "expo-router"; // ok to import from expo-router
import { useFonts } from "expo-font";
import { useEffect } from "react";

// IMPORTANT: call this at module scope (top-level), before any component renders
SplashScreen.preventAutoHideAsync().catch(() => {
  /* ignore in dev hot reload */
});

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) {
      console.error("Font load error:", error);
      // don't throw in dev, or you'll never reach hideAsync
    }
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded]);

  // Don’t render navigation until fonts are ready
  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
