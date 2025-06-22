import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Icon from "@/components/ui/icon";

const Documents = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <Icon
            name="FileText"
            size={64}
            className="text-blue-700 mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Каталог документов
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Здесь будет представлен полный каталог исторических документов
          </p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Documents;
