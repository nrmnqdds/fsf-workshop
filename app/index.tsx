//@ts-nocheck

import { SafeAreaView, View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native"
import { Stack } from "expo-router"
import { useEffect, useState } from "react"
import { Image } from "expo-image"

const Index = () => {

  const [myTweet, setMyTweet] = useState<string>("")
  const [tweets, setTweets] = useState([])

  const handleSubmit = (e: string) => {
    console.log(e)
  }

  const fetchTweets = async () => {
    const res = await fetch("https://workshop.elyasasmad.com/posts")
    const data = await res.json()
    setTweets(data)
    return data;
  }

  useEffect(() => {
    fetchTweets()
  }, [])

  return (
    <SafeAreaView className="bg-zinc-900 flex-1">
      <Stack.Screen
        options={{
          title: "Tweets",
          headerTitleStyle: {
            color: "white"
          }
        }}
      />
      <View className="px-5 pt-5">
        <TextInput
          className="bg-zinc-800 h-24 text-white border border-solid border-zinc-700 rounded-xl px-2"
          placeholder="What's happening?"
          textAlignVertical="top"
          multiline
          blurOnSubmit
          onChangeText={(e) => setMyTweet(e)}
        />
        <View className="flex items-end">
          <TouchableOpacity
            onPress={() => handleSubmit(myTweet)}
            className="bg-blue-800 w-24 h-10 flex items-center justify-center rounded-xl border border-solid border-blue-900 mt-5"
          >
            <Text className="text-white">Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="flex-1 w-full">
        <View className="px-5 pt-5 flex flex-col gap-5">
          {tweets?.map((tweet, index) => (
            <View key={tweet.id} className="flex flex-row">
              <View className="w-1/4">
                <Image
                  source={{ uri: tweet.photoURL }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50
                  }}
                />
              </View>
              <View className="flex flex-col gap-2">
                <View className="flex flex-row items-center gap-2">
                  <Text className="text-white font-bold text-2xl">{tweet.name}</Text>
                  <Text className="text-white">{tweet.username}</Text>
                </View>
                <Text className="text-white">{tweet.content}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Index
