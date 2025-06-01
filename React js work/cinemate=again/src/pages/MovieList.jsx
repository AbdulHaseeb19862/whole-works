import useFetch from "../hooks/useFetch";
import Card from "../components/Card";

export function MovieList({ apiPath }) {
  const { data: movies } = useFetch(apiPath);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7  ">
        <div className="flex justify-center  flex-wrap gap-6 md:gap-12">
          {movies?.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
}
