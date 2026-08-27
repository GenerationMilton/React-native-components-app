import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import React from 'react';


const Animation101Screen = () => {
  return (
    <ThemedView margin>

      <ThemedButton className='mb-5'
        onPress={() => console.log('fadeIn')}
      >
        FadeIn</ThemedButton>
      <ThemedButton className='mb-5'
        onPress={() => console.log('fadeOut')}
      >FadeOut</ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
