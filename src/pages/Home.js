import { useContext } from "react";
import { Store } from "../context/context";
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

export default function Home() {
  const { mode, setMode } = useContext(Store);
  return (
    <>
      <NavBar mode={mode} setMode={setMode} />
      <Banner mode={mode} />
      <Skills mode={mode} />
      <Projects mode={mode} />
      <Footer mode={mode} />
    </>
  );
}
