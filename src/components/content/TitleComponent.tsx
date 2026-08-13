type TitleComponentProps = {
  title: string;
};

const TitleComponent: React.FC<TitleComponentProps> = ({ title }) => {
  return (
    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
      {title}
    </h2>
  );
};

export default TitleComponent;
