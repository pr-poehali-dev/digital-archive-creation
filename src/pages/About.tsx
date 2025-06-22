import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="py-16">
          <div className="text-center mb-12">
            <Icon
              name="Info"
              size={64}
              className="text-blue-700 mx-auto mb-6"
            />
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              О проекте
            </h1>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-slate-700">
            <p className="text-lg">
              Цифровой архив исторических документов — это открытая платформа
              для сохранения и изучения культурного наследия.
            </p>

            <p>
              Проект объединяет музеи, архивы и исследовательские центры для
              создания единой базы исторических материалов, доступной для
              исследователей и широкой общественности.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Наша миссия</h3>
              <p>
                Сделать историческое наследие доступным для всех, способствуя
                развитию науки и образования.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
