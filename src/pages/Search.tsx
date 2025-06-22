import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Icon from "@/components/ui/icon";

const Search = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <Icon
            name="Search"
            size={64}
            className="text-blue-700 mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Расширенный поиск
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Инструменты для детального поиска по архиву
          </p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Search;
