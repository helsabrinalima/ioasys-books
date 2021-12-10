import { useEffect, useState } from 'react'
import arrowLeft from '../../assets/images/arrow-left.svg'
import arrowRight from '../../assets/images/arrow-right.svg'
import logoutIcon from '../../assets/images/logout.svg'
import { BookCard } from '../../Components/BookCard'
import { Logo } from '../../Components/Logo'
import { TextIcon } from '../../Components/TextIcon'
import { useAuth } from '../../contexts/auth'
import { BooksRequest } from '../../services/api'
import './index.scss'

export function Home() {

  const { user } = useAuth()

  const [bookList, setBookList] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)

  const totalPage = Math.ceil(totalPages)
  const prevPage = currentPage - 1 
  const nextPage = currentPage + 1

  async function getBooksList() {
    
    try{
      const response = await BooksRequest(pageNumber)
      setBookList(response.data.data)
      setCurrentPage(response.data.page)
      setTotalPages(response.data.totalPages)
    }catch(err) {
      console.log(err.message)
    }

  }

  useEffect(() => {
    getBooksList()
  }, [pageNumber])

  return(

    
    <div className="Home">
      <div className="header">
        <Logo />
        <TextIcon
          text={["Bem vindo, ", <strong>{user.name}!</strong>]}
          icon={logoutIcon}
        />
      </div>
      <div className="main">
        {bookList.map(book =>
          <BookCard 
            bookImg={book.imageUrl}
            title={book.title}
            authors={book.authors.length > 1 ? book.authors.join(', ') : book.authors}
            pageCount={book.pageCount}
            publisher={book.publisher}
            published={book.published}
          />  
        )}
      </div>
      <div className="navigation">
        <TextIcon
          text={["Página ", <strong>{currentPage}</strong>, " de ", <strong>{totalPage}</strong>]}
          twooButton
          icon={arrowLeft}
          iconTwo={arrowRight}
          disabledOne={currentPage === 0 || currentPage === 1}
          disabledTwo={currentPage === totalPage}
          nextClick={() => setPageNumber(nextPage)}
          prevClick={() => setPageNumber(prevPage)}
        />
      </div>
    </div>
  )
}