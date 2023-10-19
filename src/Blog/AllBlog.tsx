import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import SingleBlog from "./SingleBlog";

const AllBlog = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setData(data.categories));
  }, []);
  return (
    <>
      <View style={{ marginTop: 10, paddingBottom: 92, marginHorizontal: 10 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <SingleBlog data={item} />}
          contentContainerStyle={{
            flexDirection: "column",
            gap: 10,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        />
      </View>
    </>
  );
};

export default AllBlog;
