import { View, FlatList } from "react-native";
import SingleBlog from "./SingleBlog";
import allblog from "../ReuseableComponents/allblog";
import { useQuery } from "react-query";

const AllBlog = () => {
  const { data }: any = useQuery("Getallbolgdatafromapi", allblog);
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
