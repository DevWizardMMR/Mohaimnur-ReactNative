import { Image, Text, View } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';


const SearchBlog = ({ data }) => {
  const youtubeVideo = data.strYoutube.split("=")[1];
  console.log(youtubeVideo);
  return (
    <>
      <View>
        <Image
          style={{}}
          width={100}
          height={100}
          source={{ uri: data?.strMealThumb }}
        />
        <View>
          <Text>{data?.strMeal}</Text>
          <Text>Category: {data?.strCategory}</Text>
          <Text>Country:{data?.strArea}</Text>
          <Text>{data?.strInstructions}</Text>
          <Text>{data?.strMeal}</Text>
          <YoutubePlayer height={300} play={true} videoId={youtubeVideo} />
        </View>
      </View>
    </>
  );
};

export default SearchBlog;
