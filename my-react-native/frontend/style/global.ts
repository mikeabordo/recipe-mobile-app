import { StyleSheet } from 'react-native';

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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f5f5f5ff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#f5f5f5ff', // Tailwind gray-500 equivalent
  },
});
