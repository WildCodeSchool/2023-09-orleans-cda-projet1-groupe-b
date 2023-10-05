import CarouselGameShow from './CarouselGameShow';

export default function GameShow() {
  return (
    <section className="w-full mx-2 sm:mx-10 lg:mx-5 xl:mx-10">
      <h1 className="text-light">Game Show</h1>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-grow bg-primary">
          <CarouselGameShow />
        </div>
        <div className="flex-none sm:w-48 md:w-56 bg-primary">2 Métascore</div>
      </div>
    </section>
  );
}
