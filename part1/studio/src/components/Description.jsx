import styles from './Description.module.css';
import React from 'react';

const RecipeAuthor = () => { 
    const authorLink = "https://www.foodnetwork.com/recipes/alton-brown/sugar-cookies-recipe-1914697";
    const authorPhoto = "https://food.fnr.sndimg.com/content/dam/images/food/editorial/talent/alton-brown/FN-TalentAvatar-Alton-Brown.jpg.rend.hgtvcom.126.126.suffix/1532979092729.webp";
    const authorName = "Alton Brown";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Alton Brown photo" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Food network link</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {

    render() {
       return (
          <div> 
             <div>
                <h1>Sugar Cookies</h1>
                <p>One of the best sugar cookies recipes!</p>
             </div>
             <RecipeAuthor />
          </div>
       );
    }
 }
 
 export default RecipeDescription;
