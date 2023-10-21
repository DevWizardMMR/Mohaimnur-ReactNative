import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import SearchBlog from "./SearchBlog";

const OwnBlog = () => {
  const [blog, setBlog] = useState(null);
  const [searchText, setSearchtext] = useState("nodata");

  const searchFunction = async (text: any) => {
    text ? setSearchtext(text) : setSearchtext("nodata");
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => (data.meals ? setBlog(data.meals) : setBlog(null)));
  }, [searchText]);

  return (
    <>
      <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
        <TextInput
          onChangeText={searchFunction}
          style={styles.searchbox}
          placeholder="Search Blog"
        ></TextInput>
        <View>
          {blog ? (
            <FlatList
              data={blog}
              renderItem={({ item }) => <SearchBlog data={item} 
              
              />}
            />
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "red",
                  fontFamily: "font-raleway",
                  letterSpacing: 5,
                }}
              >
                There is no data!
              </Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchbox: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#cccccc",
    borderRadius: 5,
  },
});

export default OwnBlog;
