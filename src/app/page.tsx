import Bestselling from "@/Components/Bestselling";
import Classic from "@/Components/Classic";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Post from "@/Components/Post";
import Universe from "@/Components/Universe";
import Editor from "@/Components/editor";

export default function Home() {
  return (
    <div>
       <Hero />
      <Editor />
      <Bestselling />
      <Classic />
      <Universe />
      <Post />
      // <Footer /> 
    </div>
  );
}
