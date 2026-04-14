import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName =
  'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      {/* HEADER */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-yellow-400 via-blue-500 to-yellow-300 bg-clip-text text-transparent">
            NU MANILA
          </span>
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Sign in to access your student store account
        </p>
      </div>

      {/* LOGIN TITLE */}
      <h2 className="text-2xl font-bold text-center text-zinc-900 mt-6">Sign In</h2>

      <form onSubmit={handleLogin} className="mt-8 space-y-5">

        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-zinc-700">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="student@nu.edu.ph"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs text-zinc-500">
            Use your NU Manila account credentials
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-zinc-600">
            <input type="checkbox" className="h-4 w-4 accent-blue-600" />
            Remember me
          </label>

          <button type="button" className="text-blue-600 hover:text-blue-800 font-medium">
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          className={`${actionButtonClassName} bg-gradient-to-r from-yellow-500 via-blue-600 to-yellow-400 text-white font-bold hover:opacity-90`}
        >
          Sign In
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Google Sign In
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Microsoft Sign In
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-center text-zinc-600">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-blue-700 hover:text-blue-900">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;