interface ILinkProps {
  href: string;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

function Link({ children, href, className }: ILinkProps) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default Link;
