function SectionHeader({ title, description }) {
  return (
    <div className="pb-8">
      <p className="text-4xl font-bold inline">{title}</p>
      {description && <p className="py-4">{description}</p>}
    </div>
  );
}

export default SectionHeader;
