type PropType = {
  children?: React.ReactNode;
  classname?: string;
};
function Wrapper({ children, classname }: PropType) {
  return (
    <div
      className={`${classname} sm:w-[90%] lg:w-1/2 md:w-2/3 border rounded-lg border-white bg-white`}
    >
      {children}
    </div>
  );
}
export default Wrapper;
