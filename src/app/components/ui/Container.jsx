export default function Container({ children, className = "", as: Tag = "div", fluid = false }) {
  return (
    <Tag
      className={`
        mx-auto w-full px-4 sm:px-6 lg:px-8
        ${fluid ? "max-w-full" : "max-w-7xl"}
        ${className}
      `.trim()}
    >
      {children}
    </Tag>
  );
}