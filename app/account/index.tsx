import { userStore } from '@/lib/stores/UserStore'
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
  return (
    <View>
        <Text>
            Welcome, {userStore.user}
        </Text>
    </View>
  )
}

export default index
