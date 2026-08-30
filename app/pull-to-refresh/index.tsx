import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';

const PullToRefreshScreen = () => {

  const primaryColor = useThemeColor({}, 'primary');
  const backgoundColor = useThemeColor({
    dark: 'black', light: 'white'
  }, 'background');

  const [isRefreshing, setIsRefreshing] = useState(false);

  //function to determine refresh or not
  const onRefresh = async () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false)
    }, 3000);
  }


  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[primaryColor, 'red', 'orange', 'green']}
          progressBackgroundColor={backgoundColor}

        />
      }

    >
      <ThemedView margin>
        <ThemedText>
          PullToRefreshScreen
        </ThemedText>
      </ThemedView>

    </ScrollView>

  );
};
export default PullToRefreshScreen;
