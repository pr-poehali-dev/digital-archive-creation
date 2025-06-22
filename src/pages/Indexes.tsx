import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const Indexes = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <Icon name="List" size={64} className="text-blue-700 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Указатели</h1>
          <p className="text-lg text-slate-600">
            Систематизированные каталоги по темам и авторам
          </p>
        </div>
      </div>
    </div>
  );
};

export default Indexes;
