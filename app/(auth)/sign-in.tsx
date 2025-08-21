import { router } from 'expo-router'
import { View, Text ,Button} from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Button title='sign up' onPress={() => router.push("/sign-up")}/>
    </View>
  )
}

export default SignIn