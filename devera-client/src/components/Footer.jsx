const Footer = () => {
  return (
    <footer className="border-t-2 border-blue-900 bg-blue-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-blue-50 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Brand */}
        <div>
          <p className="text-lg font-bold">BulldogEx Shop</p>
          <p className="mt-1 text-sm text-blue-200">
            Campus essentials, simple ordering.
          </p>
        </div>

        {/* Links */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-300">
          Products | Cart | Pickup
        </p>

      </div>
    </footer>
  );
};

export default Footer;