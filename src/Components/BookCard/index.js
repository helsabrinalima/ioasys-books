
import emptyBook from '../../assets/images/empty-img-book.svg';
import './index.scss';

export function BookCard({bookImg, title, authors, pageCount, publisher, published}) {
  return(
    <div className="BookCard">
     <div className="first-column">
       <img src={bookImg ? bookImg : emptyBook} alt="capa do livro"/>
     </div>
     <div className="second-column">
       <div className="first-row">
        <h5 className="title">{title ? title : 'The Unknown Book'}</h5>
        <p className="subtitle">{authors ? authors : 'Unknow Author'}</p>
       </div>
       <div className="second-row">
        <p className="info">{pageCount} páginas</p>
        <p className="info">Editora {publisher}</p>
        <p className="info">Publicado em {published}</p>
       </div>
     </div>
    </div>
  )
}