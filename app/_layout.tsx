import { Stack } from "expo-router";
import colors from "tailwindcss/colors"

// Import your global CSS file
import "../styles/globals.css"

const Layout = () => {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: colors.zinc[950]
      }
    }}
    />
  )
}

export default Layout

