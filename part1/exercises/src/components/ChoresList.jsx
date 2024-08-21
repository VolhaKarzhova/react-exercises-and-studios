import classes from './ChoresList.module.css';

export default function ChoresList () {
   const chores = ["Wash the cat", "Feed the cat", "Clean after cat"];
   return (<div>
             <h3 className = {classes.choresHeading}>My chores today:</h3>
             <ul className= {classes.chores}>
                <li className={classes.choresText}>{chores[0]}</li>
                <li className={classes.choresText}>{chores[1]}</li>
                <li className={classes.choresText}>{chores[2]}</li>
         </ul>
      </div>);
}