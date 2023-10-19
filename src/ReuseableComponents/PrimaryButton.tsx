import { TouchableOpacity, Text, StyleSheet } from "react-native";

const PrimaryButton = ({ Title, onpress }) => {
  return (
    <>
      <TouchableOpacity style={styles.pButton} onPress={onpress}>
        <Text style={styles.pText}>{Title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
   pButton:{
    paddingHorizontal:24,
    paddingVertical:5,
    backgroundColor: "#006ca5",
    borderRadius: 4,
   },
   pText:{
    color:"white",
    letterSpacing:-.5,
    textAlign:"center"
   }
})

export default PrimaryButton;
