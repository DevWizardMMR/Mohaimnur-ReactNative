import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import PrimaryButton from "../ReuseableComponents/PrimaryButton";
import Skillsection from "./Skillsection";

const Home = () => {
  const resumeData = {
    img: "https://media.licdn.com/dms/image/sync/D5627AQFqRe6Y6c19dw/articleshare-shrink_480/0/1696391046807?e=1698138000&v=beta&t=uoOLMsdioYPJSocH6dMf1jmhDJv9vPlb6gluQ5NBWi4",
    name: "Mohaiminur Rahman Mukta",
    location: "Rangpur, Bangladesh",
    phone: "(+880) 1757245820",
    title: "MERN stack website Developer",
    email: "mohaiminur24@gmail.com",
    linkedIn: "LinkedIn Profile URL",
    github: "GitHub Profile URL",
    portfolio: "Portfolio URL",
    careerObjective:
      "I am a junior MERN Stack website developer. I am an experienced React.js MERN Stack developer with expertise in Express.js, Node.js, JWT, MongoDB, Next.js and JavaScript. I can build interactive and user-friendly web applications, collaborate effectively with backend developers, and solve complex problems. My adaptability, strong communication skills, and proven track record make me a valuable asset to any team.",
    skills: {
      expertise: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind",
        "JavaScript",
        "ES6",
        "React JS",
        "Express JS",
        "Firebase",
        "JWT (JSON web token)",
      ],
      comfortable: [
        "REST APIs",
        "Node JS",
        "MongoDB",
        "Next JS",
        "Mongoose",
        "Payment Method Stripe",
        "Typescript",
        "Redux",
      ],
      familiar: ["MySQL", "WordPress", "PHP", "GraphQL", "SQL", "React Native"],
      tools: [
        "VS Code",
        "GitHub",
        "Figma",
        "Netlify",
        "Vercel",
        "Adobe Photoshop cs6",
      ],
    },
    projects: [
      {
        name: "Frame Fusion",
        date: "Jun 06, 2023 – Jun 12, 2023",
        links: {
          live: "Live Link",
          githubClient: "GitHub Client",
          githubServer: "GitHub Server",
        },
        description:
          "This website is for Online course related. It has a user's authentication system and three types of dashboard for users. First, a normal user can buy a course with his payment method. Instructors can create new online classes and the admin can control all classes and manage user roles. Admin email: admin@gmail.com and Admin Password: Muktar24@",
        technologies: [
          "React JS",
          "HTML",
          "CSS",
          "Express JS",
          "MongoDB",
          "JWT",
          "Payment Method Stripe",
          "Firebase",
          "Daisy UI",
          "Tailwind CSS",
        ],
      },
      {
        name: "PlayCarZone",
        date: "May 17, 2023 – May 21, 2023",
        links: {
          live: "Live Link",
          githubClient: "GitHub Client",
          githubServer: "GitHub Server",
        },
        description:
          "PlayCarZone is a toy store. Users can sell their own toy and buy new toys. My toys have a sorting system. Users can delete their own toys and update their own toys. All toy pages have a search bar. Users can search for their favorite toy by searching by toy name.",
        technologies: [
          "React JS",
          "HTML",
          "CSS",
          "Firebase",
          "MongoDB",
          "Tailwind CSS",
          "Daisy UI",
          "React router DOM",
        ],
      },
      {
        name: "Volunteer Network",
        date: "May 15, 2023 – May 24, 2023",
        links: {
          live: "Live Link",
          githubClient: "GitHub Client",
          githubServer: "GitHub Server",
        },
        description:
          "This website is for a Volunteer network. Users can create a network and remove their own network. This website's home page has a search bar. Users can search networks by network name, and this website has a user Authentication system.",
        technologies: [
          "React JS",
          "HTML",
          "CSS",
          "Firebase",
          "MongoDB",
          "Tailwind CSS",
          "Daisy UI",
        ],
      },
    ],
    education: [
      {
        institution: "Shyamoli Ideal Polytechnic Institute Rangpur",
        major: "Computer Science",
      },
    ],
    coursesAndAchievements: [
      {
        program: "Programing Hero",
        description: "Complete web development Course with Jhankar Mahabub",
        date: "Jan 2023 – Jun 2023",
      },
    ],
    languageProficiency:
      "Fluent in Bengali, full working knowledge of English, and a good understanding of Hindi language.",
  };

  return (
    <>
      <ScrollView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{
              uri: resumeData.img,
              cache: "only-if-cached",
            }}
            style={{
              width: "50%",
              height: 250,
              borderRadius: 20,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 4,
              marginTop: 5,
            }}
          />
          <Text style={styles.topHeader}>{resumeData.name}</Text>
          <Text>{resumeData.location}</Text>
          <Text>Email: {resumeData.email}</Text>
          <Text>Phone: {resumeData.phone}</Text>
          <Text>{resumeData.linkedIn}</Text>
          <Text style={{ marginBottom: 5 }}>{resumeData.github}</Text>
          <PrimaryButton
            Title="Downlaod Resume"
            onpress={() => console.log("download resume button is click")}
          />
          <Text
            style={{ width: "95%", textAlign: "justify", marginVertical: 10 }}
          >
            {resumeData.careerObjective}
          </Text>
        </View>
        <Skillsection skills={resumeData.skills} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  topHeader: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    letterSpacing: 1,
  },
});

export default Home;
