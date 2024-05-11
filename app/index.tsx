import TweetBox from "@/components/tweetbox";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

export type TData = {
	id: string;
	name: string;
	username: string;
	photoURL: string;
	content: string;
	createdAt: string;
	data: {
		likes: number;
		reposts: number;
		comments: number;
	};
};

export default function App() {
	const [myTweet, setMyTweet] = useState("");
	const [fetchedData, setFetchedData] = useState([]);

	async function fetchData() {
		const response = await fetch("https://workshop.elyasasmad.com/posts");
		const data = await response.json();

		setFetchedData(data);

		return data;
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<View className="bg-zinc-900 flex-1">
			<Stack.Screen
				options={{
					title: "Home",
					headerTitleStyle: { color: "white" },
					headerStyle: { backgroundColor: "black" },
				}}
			/>
			<View className="p-3">
				<TextInput
					multiline
					textAlignVertical="top"
					blurOnSubmit
					placeholder="Whats happening..."
					placeholderTextColor="gray"
					className="bg-zinc-800 text-white h-32 rounded-xl px-2"
					onChangeText={(e) => setMyTweet(e)}
				/>
			</View>

			<TouchableOpacity onPress={() => console.log(myTweet)}>
				<View className="bg-blue-600 w-24 rounded-xl p-3 flex items-center justify-center">
					<Text className="text-white font-bold">Tweet</Text>
				</View>
			</TouchableOpacity>

			<ScrollView>
				{fetchedData.map((tweet: TData) => (
					<TweetBox {...tweet} key={tweet.id} />
				))}
			</ScrollView>
		</View>
	);
}
