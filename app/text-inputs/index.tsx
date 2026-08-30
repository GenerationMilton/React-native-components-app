import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeTextInput from '@/presentation/shared/ThemeTextInput';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const TextInputsScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <ThemedView margin>

      <ThemedCard className='mb-5'>
        <ThemeTextInput
          placeholder='Nombre Completo'
          autoCapitalize={'words'}
          autoCorrect={false}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
      </ThemedCard>

      <ThemedCard>
        <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
      </ThemedCard>


    </ThemedView >
  );
};
export default TextInputsScreen;
