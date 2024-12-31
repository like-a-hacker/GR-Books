import BooksData from '../BooksData.json' 

const Section = () => {

  return (
    <>
        <div className="m-7 w-dvh">
            <div className="flex flex-wrap gap-2 w-full">
            {BooksData.Fiction.map((book,id) => (
              <div className=" flex w-48 h-72 justify-center items-center flex-col " key={id}>
                <img className="w-40 h-60 m-3" src={book.image_link} alt="image" />
                <div className="w-32 flex justify-center overflow-x-hidden overflow-y-hidden">{book.title}</div>
              </div>
            ))}
              
            </div>
        </div>
    </>
  )
}

export default Section