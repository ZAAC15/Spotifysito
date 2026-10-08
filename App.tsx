import { NavigationContainer } from '@react-navigation/native';

import { FavoritesProvider } from './context/FavoritesContext';
import DrawerNav from './navigation/DrawerNav';

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </FavoritesProvider>
  );
}