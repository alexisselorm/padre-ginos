const Pizza = (prop) => {
  return (
    <div className="pizza">
      <h1>{prop.name ?? "Fefe"}</h1>
      <p>{prop.description}</p>
      <img src={prop.image ?? "https://picsum.photos/200"} alt={prop.name} />
    </div>
  );
};

export default Pizza;
