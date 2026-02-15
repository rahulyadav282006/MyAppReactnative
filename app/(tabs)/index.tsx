import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function App(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [loading, setLoading] = useState(false);
  const handlePress = () => {
    console.log("Username:", username);
    console.log("Password:", password);
     setLoading(true);
  setTimeout(() => {
    setLoading(false);
    console.log("Logged in");
  }, 2000);
  };
    return(
           <View
            style={{
            flex:1,
            backgroundColor: '#E3F2FD',            
            justifyContent: 'center', 
            alignItems: 'center',     
           }}
    >
        <Text>User Name</Text>
        <TextInput
    
            placeholder="Enter User name"
            value={username} 
            onChangeText={setUsername}
            
            style={{
            width: '50%',       
            height: 40,
            borderWidth: 1,
            backgroundColor:  '#E3F2FD',
            marginBottom: 15,
            paddingHorizontal: 15,marginTop:10
        }}  
            
/>
<Text>Password</Text>
        <TextInput
            placeholder="Enter Password"
            value={password} 
            onChangeText={setPassword}
            secureTextEntry={true}
            style={{
            width: '50%',       
            height: 40,
            borderWidth: 1,
            backgroundColor:  '#E3F2FD',
            marginBottom: 15,
            paddingHorizontal: 15,
            marginTop:10,
            
        }}
            
/>
<View style={{ alignItems: 'center' }}>

 <View style={{ width: 120 }}>

<Button title={loading ? "Logging in..." : "Login"}      //title="Login"
onPress={handlePress}
/>
</View>
</View>
</View>
);
}
