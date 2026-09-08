interface SectionHeadingProps {
  number: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  number,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-header">
      <div>
        <div className="section-number">{number}</div>

        <h2 className="section-title">{title}</h2>
      </div>

      <p className="section-description">{description}</p>
    </div>
  );
}
