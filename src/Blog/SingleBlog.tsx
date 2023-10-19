import { View, Image, Text } from "react-native";
import PrimaryButton from "../ReuseableComponents/PrimaryButton";

const SingleBlog = ({ data }) => {
  return (
    <>
      <View
        style={{
          shadowColor: "#cccccc",
          shadowOpacity: 0.3,
          elevation: 5,
          shadowOffset: { width: 5, height: 2 },
          shadowRadius: 3,
          flexDirection: "row",
          gap: 10,
          alignItems: "stretch",
        }}
      >
        <Image
          source={{ uri: data?.strCategoryThumb }}
          width={150}
          height={100}
        />
        <View style={{ width: "60%" }}>
          <Text
            style={{
              fontFamily: "font-mooli",
              fontSize: 20,
              letterSpacing: -1,
            }}
          >
            {data.strCategory}
          </Text>
          <Text
            style={{ fontFamily: "font-inter", fontSize: 12, textAlign:"justify" }}
          >
            {data.strCategoryDescription}
          </Text>
          <PrimaryButton Title="Learn More" onpress={{}} />
        </View>
      </View>
    </>
  );
};

export default SingleBlog;
