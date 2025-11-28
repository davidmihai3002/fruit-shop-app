import { useUser } from '@/lib/hooks/useUser';
import React from 'react';
import { Text, View } from 'react-native';

const AppDashboard = () => {
    const {user} = useUser();
  return (
    <View style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%"
        }}>
        <Text>Hello {user}</Text>
    </View>
  )
}

export default AppDashboard
