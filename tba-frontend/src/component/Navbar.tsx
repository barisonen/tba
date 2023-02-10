import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => {

  const linkClassName = `text-gray-300 
    hover:bg-gray-700
    hover:text-white
    px-3 py-2
    rounded-md
    text-sm
    font-medium`;

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
            </div>
            <div className="sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to='/' className={linkClassName}>Homepage</Link>
                <Link to='/posts' className={linkClassName}>Posts</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;