import type { TData } from "@/app";
import { Image, Text, View } from "react-native";
import colors from "tailwindcss/colors";

export default function TweetBox(props: TData) {
	return (
		<View
			style={{
				backgroundColor: colors.zinc[950],
				padding: 10,
				borderColor: colors.zinc[800],
				borderWidth: 1,
				borderRadius: 10,
			}}
		>
			<View
				style={{
					flexDirection: "row",
				}}
			>
				<Image
					source={{ uri: props.photoURL }}
					style={{ width: 50, height: 50, borderRadius: 50 }}
				/>
				<View
					style={{
						flexDirection: "column",
						marginLeft: 20,
					}}
				>
					<Text
						style={{
							color: "white",
						}}
					>
						{props.name}
					</Text>
					<Text
						style={{
							color: "white",
						}}
					>
						{props.username}
					</Text>
				</View>
			</View>
			<Text
				style={{
					color: "white",
				}}
			>
				{props.content}
			</Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 10,
				}}
			>
				<Image
					style={{ width: 20, height: 20, objectFit: "contain" }}
					source={require("@/assets/images/pngwing.com.png")}
				/>
				<Image
					style={{
						width: 20,
						height: 20,
						tintColor: "white",
					}}
					source={require("@/assets/images/commenticon.png")}
				/>
				<Image
					style={{
						width: 20,
						height: 20,
						tintColor: "white",
					}}
					source={require("@/assets/images/shareicon.png")}
				/>
			</View>
		</View>
	);
}
