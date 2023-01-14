export const ContactList = ({ items }) => {
  return (
    <div>
      {items.map((item, id) => {
        <li key={id}>
          <div contact={item}></div>
        </li>;
      })}
    </div>
  );
};
