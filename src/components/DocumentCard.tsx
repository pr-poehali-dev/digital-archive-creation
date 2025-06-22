import { Link } from "react-router-dom";
import { Document } from "@/types/document";
import Icon from "@/components/ui/icon";

interface DocumentCardProps {
  document: Document;
  size?: "compact" | "full";
}

const DocumentCard = ({ document, size = "full" }: DocumentCardProps) => {
  const getDocumentIcon = (type: Document["type"]) => {
    switch (type) {
      case "pdf":
        return "FileText";
      case "image":
        return "Image";
      case "audio":
        return "Music";
      case "video":
        return "Video";
      default:
        return "File";
    }
  };

  const getTypeLabel = (type: Document["type"]) => {
    switch (type) {
      case "pdf":
        return "PDF документ";
      case "image":
        return "Изображение";
      case "audio":
        return "Аудиозапись";
      case "video":
        return "Видеозапись";
      default:
        return "Документ";
    }
  };

  if (size === "compact") {
    return (
      <Link to={`/document/${document.id}`} className="block">
        <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-3">
            <Icon
              name={getDocumentIcon(document.type)}
              size={20}
              className="text-blue-700 mt-1"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-slate-900 truncate">
                {document.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                {document.author} • {document.date}
              </p>
              <p className="text-sm text-slate-600 mt-1 line-clamp-2">
                {document.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/document/${document.id}`} className="block">
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-video bg-slate-100 flex items-center justify-center">
          {document.thumbnailUrl ? (
            <img
              src={document.thumbnailUrl}
              alt={document.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <Icon
              name={getDocumentIcon(document.type)}
              size={48}
              className="text-slate-400"
            />
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">
              {getTypeLabel(document.type)}
            </span>
            <span className="text-xs text-slate-500">{document.date}</span>
          </div>

          <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
            {document.title}
          </h3>
          <p className="text-sm text-slate-600 mb-3 line-clamp-3">
            {document.description}
          </p>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{document.author}</span>
            <span>{document.institution}</span>
          </div>

          {document.keywords.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {document.keywords.slice(0, 3).map((keyword, index) => (
                <span
                  key={index}
                  className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default DocumentCard;
