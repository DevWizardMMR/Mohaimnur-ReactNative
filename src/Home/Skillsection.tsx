import { FlatList, StyleSheet, Text, View } from "react-native";

const Skillsection = ({ skills }) => {

  return (
    <>
      <View style={{width:"90%"}}>
      
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <Text style={styles.skillTitle}>Expertise:</Text>
          <View>
            <FlatList
              data={skills.expertise}
              renderItem={({ item }) => <Text>{item}</Text>}
              contentContainerStyle={{
                flexWrap: "wrap",
                flexDirection: "row",
                gap: 5,
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <Text style={styles.skillTitle}>Comfortable:</Text>
          <View>
            <FlatList
              data={skills.comfortable}
              renderItem={({ item }) => <Text>{item}</Text>}
              contentContainerStyle={{
                flexWrap: "wrap",
                flexDirection: "row",
                gap: 5,
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <Text style={styles.skillTitle}>Familiar:</Text>
          <View>
            <FlatList
              data={skills.familiar}
              renderItem={({ item }) => <Text>{item}</Text>}
              contentContainerStyle={{
                flexWrap: "wrap",
                flexDirection: "row",
                gap: 5,
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <Text style={styles.skillTitle}>Tools:</Text>
          <View>
            <FlatList
              data={skills.tools}
              renderItem={({ item }) => <Text>{item}</Text>}
              contentContainerStyle={{
                flexWrap: "wrap",
                flexDirection: "row",
                gap: 5,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  skillTitle: {
    fontFamily:"font-raleway",
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 8
  },
});
export default Skillsection;
