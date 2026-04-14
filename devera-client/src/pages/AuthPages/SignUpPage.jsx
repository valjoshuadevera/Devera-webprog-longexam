import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName =
  'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/auth/signin'); // after sign up go to sign in page
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
          Create your student account
        </p>
      </div>

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-center text-zinc-900">
        Sign Up
      </h2>

      <form onSubmit={handleSignup} className="mt-8 space-y-5">

        {/* NAME */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-zinc-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm font-medium text-zinc-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="student@nu.edu.ph"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs text-zinc-500">
            Use a strong password with letters, numbers, and symbols
          </p>
        </div>

        {/* CREATE BUTTON */}
        <Button
          type="submit"
          variant="primary"
          className={`${actionButtonClassName} bg-gradient-to-r from-yellow-500 via-blue-600 to-yellow-400 text-white font-bold hover:opacity-90`}
        >
          Create Account
        </Button>

        {/* SOCIAL SIGN UP */}
        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign up with Google
          </Button>

          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign up with Microsoft
          </Button>
        </div>
      </form>

      {/* LOGIN LINK */}
      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-center text-zinc-600">
        Already have an account?{' '}
        <Link
          to="/auth/signin"
          className="font-semibold text-blue-700 hover:text-blue-900"
        >
          Sign In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;