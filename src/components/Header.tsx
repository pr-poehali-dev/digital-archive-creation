import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const navigation = [
    { name: "Главная", path: "/" },
    { name: "Музеи", path: "/museums" },
    { name: "База документов", path: "/documents" },
    { name: "Поиск", path: "/search" },
    { name: "Указатели", path: "/indexes" },
    { name: "О проекте", path: "/about" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Archive" size={28} className="text-blue-700" />
            <span className="font-bold text-xl text-slate-900">
              Электронный архив
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-slate-600 hover:text-blue-700"
                } pb-4`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            to="/admin"
            className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            Админ-панель
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
