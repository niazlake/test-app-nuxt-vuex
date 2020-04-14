export default function({ redirect }) {
  if (localStorage.getItem("token") === null) {
    redirect("/login?message=login");
  }
}
