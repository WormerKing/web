const Heading = ({
  title,
  subtitle,
  titleColor = "black",
  subtitleColor = "#121",
}) => {
  return (
    <>
      <div>
        <h1 style={{ color: titleColor }}>{title}</h1>
        <p style={{ color: subtitleColor }}>{subtitle}</p>
      </div>
    </>
  );
};

export default Heading;
