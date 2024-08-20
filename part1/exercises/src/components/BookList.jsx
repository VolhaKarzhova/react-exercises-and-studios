export default function BookList() {
   let pageTitle = "My favorite books";
   let book1 = "https://m.media-amazon.com/images/I/81oHM-dzefL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71ZfyzgSdpL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/8123QX3n+SL._SY466_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="War and Piece" />
         <img src={book2} alt="The Master and Margarita" />
         <img src={book3} alt="Pinocchio" />
      </div>      
   );
}