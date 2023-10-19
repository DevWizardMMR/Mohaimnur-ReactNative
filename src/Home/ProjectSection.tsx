import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PrimaryButton from "../ReuseableComponents/PrimaryButton";

const ProjectSection = ({ projects }) => {
  console.log(projects.links);
  return (
    <>
      <View>
        <FlatList
          data={projects}
          contentContainerStyle={{ marginHorizontal: 10, ...styles.shadow }}
          renderItem={({ item }) => {
            return (
              <>
                <View style={styles.project}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text>{item.description}</Text>
                  <View>
                    <PrimaryButton Title="More Details" onpress={()=>Linking.openURL("https://github.com/Mohaiminur-MernStackDeveloper")}/>
                  </View>
                </View>
              </>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  project: {
    borderBlockColor: "#cccccc",
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    shadowColor: "gray",
  },
  title: {
    fontFamily: "font-mooli",
    fontSize: 20,
    borderBottomColor: "#cccccc",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: 2,
    marginBottom: 5,
  },
  shadow: {
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
});

export default ProjectSection;
