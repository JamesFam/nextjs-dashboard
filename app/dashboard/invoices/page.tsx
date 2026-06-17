// export default function Page() {
//   return <p>Invoices Page</p>;
// }
export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <p>Invoices Page</p>;
}