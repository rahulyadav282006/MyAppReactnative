import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function App(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
  const handlePress = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };
    return(
           <View
            style={{
                           // Take full screen
            justifyContent: 'center', // Vertical center
            alignItems: 'center',     // Horizontal center
           }}
    >
        <Text>User Name</Text>
        <TextInput
    
            placeholder="Enter User name"
            value={username} // bind state to input
            onChangeText={setUsername}
            
            style={{
            width: '30%',       // full width
            height: 40,
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10
        }}  // updates state as user types
            
/>
<Text>Password</Text>
        <TextInput
            placeholder="Enter Password"
            value={password} // bind state to input
            onChangeText={setPassword}
            secureTextEntry={true}
            style={{
            width: '30%',       // full width
            height: 40,
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10
        }} // updates state as user types
            
/>
<View style={{ alignItems: 'center' }}>

 <View style={{ width: 120 }}>

<Button title="Login"
onPress={handlePress}
/>
</View>
</View>
</View>
);
}
