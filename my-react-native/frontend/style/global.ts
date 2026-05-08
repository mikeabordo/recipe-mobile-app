import { StyleSheet } from 'react-native';

// Font family constants — loaded once in app/_layout.tsx
export const Fonts = {
  title: 'PlayfairDisplay_700Bold',    // Elegant serif — great for food/recipe headings
  titleRegular: 'PlayfairDisplay_400Regular',
  body: 'Nunito_400Regular',           // Rounded, warm sans-serif — easy to read
  semibold: 'Nunito_600SemiBold',
  bold: 'Nunito_700Bold',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#323437ff', // Standard background color for the app
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: 'PlayfairDisplay_700Bold',
    color: '#f5f5f5ff',
    marginBottom: 8,
    marginTop: 8,
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Nunito_600SemiBold',
    color: '#f5f5f5ff',
    letterSpacing: 0.1,
  },
});
