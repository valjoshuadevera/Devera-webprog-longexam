import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen w-screen flex">

      {/* LEFT SIDE (IMAGE) */}
      <div className="hidden lg:block w-1/2 h-screen relative">
        <img
          src="/moa.png"
          alt="MOA"
          className="w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* text on top of image */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 text-white max-w-md">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to NU Manila
          </h2>
          <p className="text-white/80">
            Access your student marketplace, manage purchases, and explore campus deals.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE (AUTH FORM) */}
      <main className="w-full lg:w-1/2 flex items-center justify-center bg-zinc-100 px-6 py-10 sm:px-10 lg:px-16">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>

    </section>
  );
};

export default AuthLayout;