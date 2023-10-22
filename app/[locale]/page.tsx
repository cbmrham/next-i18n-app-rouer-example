import ClientI18nText from "@/components/client/I18nText";
import ServerI18nText from "@/components/server/I18nText";

export default function Home(p: any) {
  return (
    <main>
      <div>
        <ClientI18nText />
        <ServerI18nText />
      </div>
    </main>
  );
}
