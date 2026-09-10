import { getProfile } from "@/lib/getProfile";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Hobbies from "@/components/Hobbies";
import Links from "@/components/Links";

export default async function Home() {
  const profile = await getProfile();

  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <Intro
        name={profile.name}
        affiliation={profile.affiliation}
        bio={profile.bio}
      />
      <Projects projects={profile.projects} />
      <Interests interests={profile.interests} />
      <Hobbies hobbies={profile.hobbies} />
      <Links links={profile.links} />
    </main>
  );
}
