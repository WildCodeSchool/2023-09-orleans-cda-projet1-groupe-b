import { Link } from 'react-router-dom';
import Title from './Title';
import LogoLinkedin from './logos/LogoLinkedin';
import Button from './Button';

export default function AboutTheTeam() {
  return (
    <>
      <section className="z-40 my-12 flex w-full flex-col justify-center px-2 xs:px-5 md:px-16 lg:h-[calc(100vh-3.5rem)] lg:px-2 xl:my-0">
        <div className="">
          <Title title="About the team" />
        </div>
        <div className="grid w-full gap-9 rounded-[3px] border border-primary/30 bg-gradient-to-l from-primary/10 to-primary/5 px-4 py-10 xs:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-40 w-40 overflow-hidden rounded-full">
              <img
                src="/images/Mike.webp"
                alt="Picture of Mike"
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-center font-title text-xl text-light">
              Mike <span className="block uppercase">Xiong</span>
            </h2>
            <Link to="https://www.linkedin.com/in/mike-xiong-572a5626a/">
              <LogoLinkedin />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-40 w-40 overflow-hidden rounded-full">
              <img
                src="/images/Melvin.webp"
                alt="Picture of Melvin"
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-center font-title text-xl text-light">
              Melvin <span className="block uppercase">Rossignoles</span>
            </h2>
            <Link to="https://www.linkedin.com/in/melvin-rossignoles/">
              <LogoLinkedin />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-40 w-40 overflow-hidden rounded-full">
              <img
                src="/images/Cedric.webp"
                alt="Picture of Cedric"
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-center font-title text-xl text-light">
              Cédric <span className="block uppercase">Marie</span>
            </h2>
            <Link to="https://www.linkedin.com/in/c%C3%A9drick-marie/">
              <LogoLinkedin />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-40 w-40 overflow-hidden rounded-full">
              <img
                src="/images/Herve.webp"
                alt="Picture of Hervé"
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-center font-title text-xl text-light">
              Hervé <span className="block uppercase">Perel</span>
            </h2>
            <Link to="https://www.linkedin.com/in/herve-perel-296961239/">
              <LogoLinkedin />
            </Link>
          </div>
        </div>
        <div className="ml-5 mt-4 flex">
          <Button str="Back to home" path="/" />
        </div>
      </section>
    </>
  );
}
