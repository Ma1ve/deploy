export default async function Test({ params }: { params: { id: string } }) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`).then((res) => res.json());
  return (
    <div>
      <div>{data.title}</div>
    </div>
  );
}
