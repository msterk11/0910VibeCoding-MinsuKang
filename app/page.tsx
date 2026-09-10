import { getProfile } from "@/lib/getProfile";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Hobbies from "@/components/Hobbies";
import Links from "@/components/Links";
import Prompt from "@/components/Prompt";

export default async function Home() {
  const profile = await getProfile();

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 text-sm leading-relaxed sm:text-base">
      <div className="border border-dim">
        <div className="flex items-center justify-between border-b border-dim px-3 py-1 text-xs text-dim">
          <span>portfolio.sh</span>
          <span className="hidden sm:inline">80&times;24</span>
        </div>
        <div className="p-4 sm:p-6">
          <p className="mb-6 text-dim">
            Last login: Thu Sep 10 2026 on ttys001
          </p>
          <Intro
            name={profile.name}
            affiliation={profile.affiliation}
            bio={profile.bio}
          />
          <Projects projects={profile.projects} />
          <Interests interests={profile.interests} />
          <Hobbies hobbies={profile.hobbies} />
          <Links links={profile.links} />
          <Prompt />
        </div>
      </div>
    </main>
  );
}
