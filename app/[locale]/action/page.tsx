import { t } from "i18next";
export default function Page() {
  async function submit(formData: FormData) {
    "use server";
    // e.g. sending email with react-email
    console.log(t("hello"));
  }
  return (
    <form action={submit}>
      <button type="submit">submit</button>
    </form>
  );
}
