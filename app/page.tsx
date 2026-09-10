import { getProfile } from "@/lib/getProfile";
import Cover from "@/components/Cover";
import Contents from "@/components/Contents";
import Feature from "@/components/Feature";
import Columns from "@/components/Columns";
import Colophon from "@/components/Colophon";

export default async function Home() {
  const profile = await getProfile();

  return (
    <main className="mx-auto max-w-[1180px] bg-ink text-paper">
      <Cover
        name={profile.name}
        nameLatin={profile.nameLatin}
        role={profile.role}
        masthead={profile.masthead}
        cover={profile.cover}
      />
      <Contents contents={profile.contents} />
      <Feature feature={profile.feature} projects={profile.projects} />
      <Columns interests={profile.interests} hobbies={profile.hobbies} />
      <Colophon
        colophon={profile.colophon}
        masthead={profile.masthead}
        links={profile.links}
      />
    </main>
  );
}
