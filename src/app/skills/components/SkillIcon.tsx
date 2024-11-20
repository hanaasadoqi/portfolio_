import Image from 'next/image';

interface SkillIconProps {
  skillName: string;
  altText: string;
  size?: number;
  className?: string;
}

const sanitizeSkillName = (skillName: string) => {
  return skillName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .trim()
};

const SkillIcon: React.FC<SkillIconProps> = ({ skillName, altText, size = 36, className = '' }) => {
  const sanitizedSkillName = sanitizeSkillName(skillName);
  console.log(skillName, sanitizedSkillName)

  return (
    <Image
      src={`/icons/${sanitizedSkillName}.svg`}
      alt={altText}
      width={size}
      height={size}
      className={`inline-block ${className}`}
    />
  );
};

export default SkillIcon;
