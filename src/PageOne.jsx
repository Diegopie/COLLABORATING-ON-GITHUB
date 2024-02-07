export default function PageOne() {
  return (
    <main className="bg-yellow-300 flex h-screen">
      <div className="bg-white flex flex-col space-y-4 justify-center p-16 m-48 rounded-lg ">
        <div className="bg-yellow-300">
          <p className="text-black font-bold ">Learning</p>
        </div>
        <p>Publised 21 Dec 2023</p>

        <h1 className="text-3xl font-bold">HTML & CSS Foundations</h1>
        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <p className="font-bold">Greg Hooper</p>
      </div>
    </main>
  );
}
