import { v4 as uuidv4 } from 'uuid';

export default function ProjectList ({ items }) {
  return (
    <div className="container">
      {items.map(({ img, category }) => (
        <img key={uuidv4()} src={img} alt={category} />
      ))}
    </div>
  );
}
