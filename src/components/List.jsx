export const List = ({colors}) => {
  let keyLi = 1
  return (
    <ul>
        {colors.map(color=> 
        <li key={keyLi}>
            <p>{color}</p>
        </li>
      )}
    </ul>
  );
};
