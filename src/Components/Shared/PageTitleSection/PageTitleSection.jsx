const PageTitleSection = ({ title, subTitle }) => {
  return (
    <div className="p-5 md:p-10 bg-deep-blue text-white-coffee space-y-3">
      <h2 className="font-extrabold text-xl md:text-2xl lg:text-3xl">
        {title}
      </h2>
      <p className="text-white">{subTitle}</p>
    </div>
  );
};

export default PageTitleSection;
