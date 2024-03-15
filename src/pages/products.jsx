import { useEffect, useState } from "react";
import { CardContainer } from "../components/Card";

export default function Products() {
  const [sneakers, setSneakers] = useState([]); //para mantener el estado de sneaker
  const [page, setPage] = useState(1); //con el 1 estoy inicializando en la pagina en que empieza

  async function getData() {
    const response = await fetch(
      "http://localhost:3000/api/sneakers/?_limit=9&_page=" + page
    );
    const data = await response.json();
    setSneakers(data);
  }

  //para llamar a la funcion 'get data'  cuando el componente se ejecuta por primera vez
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="py-14 my-14">
      <div className="products">
        <div className="box-container flex flex-col items-center ">
          <CardContainer sneakers={sneakers}></CardContainer>
          <div className="grid grid-cols-2 gap-4  w-1/4">
            <button
              className="btn"
              onClick={() => {
                setPage(page - 1);
              }}
              disabled={page <= 1}
            >
              {"<"}
            </button>
            <button
              className="btn"
              onClick={() => {
                setPage(page + 1);
              }}
              disabled={page >= 5}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
