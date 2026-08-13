import MainContentComponent from "@/components/MainContentComponent";
import PrintComponent from "@/components/PrintComponent";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <MainContentComponent />
      <PrintComponent />
      <style>{`
        @media print {
          body {
            background: white;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MainLayout;
