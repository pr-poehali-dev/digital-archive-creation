import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import DocumentCard from "@/components/DocumentCard";
import { Document } from "@/types/document";
import Icon from "@/components/ui/icon";

const Index = () => {
  // Демо данные
  const [featuredDocuments] = useState<Document[]>([
    {
      id: "1",
      title: "Историческое письмо из архива XIX века",
      description:
        "Редкое письмо, найденное в личном архиве известного деятеля культуры. Содержит важную информацию о социальных изменениях того времени.",
      type: "pdf",
      storageLocation: "Архив №1, Фонд 12, Дело 345",
      date: "1856-03-15",
      author: "И.А. Петров",
      keywords: ["история", "XIX век", "письмо", "культура"],
      institution: "Государственный исторический музей",
      accessLevel: "public",
      fileUrl: "/documents/letter1856.pdf",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-15",
    },
    {
      id: "2",
      title: "Фотография городской площади 1920-х годов",
      description:
        "Уникальный снимок центральной площади города в период активного строительства. Видны архитектурные особенности эпохи.",
      type: "image",
      storageLocation: "Фотоархив, Коллекция №7",
      date: "1923-07-12",
      author: "А.М. Фотографов",
      keywords: ["фотография", "1920е", "архитектура", "город"],
      institution: "Музей истории города",
      accessLevel: "public",
      fileUrl: "/images/square1923.jpg",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      createdAt: "2024-01-16",
      updatedAt: "2024-01-16",
    },
    {
      id: "3",
      title: "Аудиозапись интервью с ветераном",
      description:
        "Устный рассказ участника исторических событий. Запись содержит уникальные свидетельства очевидца.",
      type: "audio",
      storageLocation: "Звуковой архив, Раздел В",
      date: "1995-05-09",
      author: "П.С. Свидетелев",
      keywords: ["устная история", "интервью", "воспоминания"],
      institution: "Центр устной истории",
      accessLevel: "public",
      fileUrl: "/audio/interview1995.mp3",
      createdAt: "2024-01-17",
      updatedAt: "2024-01-17",
    },
  ]);

  const stats = [
    { label: "Документов в архиве", value: "12,456", icon: "FileText" },
    { label: "Музеев-партнеров", value: "28", icon: "Building" },
    { label: "Исследователей", value: "1,234", icon: "Users" },
    { label: "Стран происхождения", value: "15", icon: "Globe" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Цифровой архив исторических документов
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Открытая база данных документов, фотографий, аудио и видеозаписей
              из архивов музеев и исследовательских центров
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/documents"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Просмотреть документы
              </Link>
              <Link
                to="/search"
                className="bg-white text-blue-700 border border-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Расширенный поиск
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <Icon
                  name={stat.icon as any}
                  size={32}
                  className="text-blue-700 mx-auto mb-3"
                />
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Рекомендуемые документы
            </h2>
            <Link
              to="/documents"
              className="text-blue-700 font-medium hover:text-blue-800 flex items-center"
            >
              Все документы
              <Icon name="ArrowRight" size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDocuments.map((document) => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Быстрый доступ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/museums"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon name="Building" size={32} className="text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Музеи и архивы
              </h3>
              <p className="text-slate-600">
                Просмотрите учреждения-партнеры и их коллекции
              </p>
            </Link>

            <Link
              to="/indexes"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon name="List" size={32} className="text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Указатели
              </h3>
              <p className="text-slate-600">
                Систематизированные каталоги по темам и авторам
              </p>
            </Link>

            <Link
              to="/about"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon name="Info" size={32} className="text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                О проекте
              </h3>
              <p className="text-slate-600">
                История создания архива и принципы работы
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
