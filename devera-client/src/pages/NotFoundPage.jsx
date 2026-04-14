import notFoundsImg from '../assets/img/notfounds.jpg';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4 text-white">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-90"></div>

      {/* LIGHTING EFFECT 1 (BLUE GLOW TOP) */}
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600 opacity-30 blur-[120px]"></div>

      {/* LIGHTING EFFECT 2 (PURPLE SIDE GLOW) */}
      <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-purple-600 opacity-25 blur-[120px]"></div>

      {/* LIGHTING EFFECT 3 (MOVING SPOT LIGHT FEEL) */}
      <div className="absolute right-10 top-20 h-80 w-80 animate-pulse rounded-full bg-cyan-500 opacity-20 blur-[140px]"></div>

      {/* IMAGE WITH GLOW */}
      <img
        src={notFoundsImg}
        alt="Page not found"
        className="z-10 mb-6 w-72 md:w-96 opacity-90 drop-shadow-[0_0_50px_rgba(59,130,246,0.7)]"
      />

      {/* ERROR LABEL */}
      <p className="z-10 mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
        Error
      </p>

      {/* 404 TEXT WITH GLOW */}
      <h1 className="z-10 mb-4 text-7xl font-extrabold tracking-widest text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.9)] md:text-8xl">
        404
      </h1>

      {/* MESSAGE */}
      <p className="z-10 mb-6 max-w-md text-center text-lg text-zinc-300 md:text-xl">
        The page you're looking for has disappeared into the void...
      </p>

      {/* BUTTONS */}
      <div className="z-10 flex gap-3">
        <Button to="/">Back Home</Button>
        <Button to="/products">View Products</Button>
      </div>

    </div>
  );
};

export default NotFoundPage;