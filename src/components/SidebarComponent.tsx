import AvatarComponent from "./sidebar/AvatarComponent";
import InfoComponent from "./sidebar/InfoComponent";
import ContactComponent from "./sidebar/ContactComponent";
import SocialComponent from "./sidebar/SocialComponent";
import AcademicComponent from "./sidebar/AcademicComponent";
import SkillsComponent from "./sidebar/SkillsComponent";

const SidebarComponent: React.FC = () => {
  return (
    <div className="p-8 md:p-10">
      <AvatarComponent />
      <InfoComponent />
      <ContactComponent />
      <SocialComponent />
      <AcademicComponent />
      <SkillsComponent />
    </div>
  );
};

export default SidebarComponent;
